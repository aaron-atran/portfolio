import { useCursor, useTexture } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from '@react-three/fiber';
import { BoxGeometry, Bone, 
    Color, 
    Float32BufferAttribute, 
    MeshStandardMaterial, 
    Skeleton, 
    SkinnedMesh, 
    Uint16BufferAttribute, 
    Vector3,
    SRGBColorSpace,
    MathUtils
} from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { useAtom } from "jotai";
import { pages, pageAtom, selectedProjectAtom } from "./UI";
import { easing } from "maath";

const easingFactor = 0.5;
const easingFactorFold = 0.3;
const insideCurveStrength = 0.18;
const outsideCurveStrength = 0.05;
const turningCurveStrength = 0.09;

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.008;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
);

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const x = vertex.x;
    const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
    let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

    skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute("skinIndex", new Uint16BufferAttribute(skinIndexes, 4));
pageGeometry.setAttribute("skinWeight", new Float32BufferAttribute(skinWeights, 4));

const whiteColor = new Color("white");
const projectHighlightColor = new Color("orange");
const emptyPageHighlightColor  = new Color("blue");

const pageMaterials = [
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: "#111",
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
];

pages.forEach((page) => {
    useTexture.preload(`./textures/${page.front.image}.jpg`);
    useTexture.preload(`./textures/${page.back.image}.jpg`);
    useTexture.preload(`./textures/book-cover-roughness.jpg`);
});

const Page = ({ number, front, back, page: currentPage, opened, bookClosed, title, body, technologies, ...props }) => {
    const [picture, picture2, pictureRoughness] = useTexture([
        `./textures/${front.image}.jpg`,
        `./textures/${back.image}.jpg`,
        ...(number === 0 || number === pages.length - 1
            ? [`./textures/book-cover-pattern.jpg`]
            : []
        ),
    ]);
    picture.colorSpace = picture2.colorSpace = SRGBColorSpace;
    const group = useRef();
    const turnedAt = useRef(0);
    const lastOpened = useRef(opened);
    const skinnedMeshRef = useRef();

    const manualSkinnedMesh = useMemo(() => {
        const bones = [];
        for (let i = 0; i <= PAGE_SEGMENTS; i++) {
            let bone = new Bone();
            bones.push(bone);

            if (i === 0) bone.position.x = 0;
            else bone.position.x = SEGMENT_WIDTH;

            if (i > 0) bones[i - 1].add(bone);
        }

        const skeleton = new Skeleton(bones);
        const materials = [...pageMaterials, 
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture,
                ...(number === 0
                    ? { roughnessMap: pictureRoughness }
                    : { roughness: 0.1 }
                ),
                emissive: projectHighlightColor,
                emissiveIntensity: 0,
            }),
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture2,
                ...(number === pages.length - 1
                    ? { roughnessMap: pictureRoughness }
                    : { roughness: 0.1 }
                ),
                emissive: projectHighlightColor,
                emissiveIntensity: 0,
            }),
        ];
        const mesh = new SkinnedMesh(pageGeometry, materials);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        mesh.add(skeleton.bones[0]);
        mesh.bind(skeleton);

        return mesh;   
    }, []);

    useFrame((_, delta) => {
        if (!skinnedMeshRef.current) return;

        const frontMaterial = skinnedMeshRef.current.material[4];
        const backMaterial = skinnedMeshRef.current.material[5];

        frontMaterial.emissive = frontHasContent
            ? projectHighlightColor
            : emptyPageHighlightColor;

        backMaterial.emissive = backHasContent
            ? projectHighlightColor
            : emptyPageHighlightColor;

        const frontIntensity =
            hoveredSide === "front" ? 0.22 : 0;

        const backIntensity =
            hoveredSide === "back" ? 0.22 : 0;

        frontMaterial.emissiveIntensity = MathUtils.lerp(
            frontMaterial.emissiveIntensity,
            frontIntensity,
            0.1
        );

        backMaterial.emissiveIntensity = MathUtils.lerp(
            backMaterial.emissiveIntensity,
            backIntensity,
            0.1
        );

        if (lastOpened.current !== opened) {
            turnedAt.current = performance.now();
            lastOpened.current = opened;
        }

        let turningTime = Math.min(500, performance.now() - turnedAt.current) / 500;
        turningTime = Math.sin(turningTime * Math.PI);

        let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
        if (!bookClosed) targetRotation += degToRad(number * 0.8);
        
        const bones = skinnedMeshRef.current.skeleton.bones;
        for (let i = 0; i < bones.length; i++) {
            const target = i === 0 ? group.current : bones[i];
            const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
            const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
            const turningIntensity = Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;

            let rotationAngle = insideCurveStrength * insideCurveIntensity * targetRotation -
                outsideCurveStrength * outsideCurveIntensity * targetRotation +
                turningCurveStrength * turningIntensity * targetRotation;


            let foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);
            if (bookClosed) {
                if (i === 0) rotationAngle = targetRotation
                else rotationAngle = 0;
            }
            
            easing.dampAngle(
                target.rotation,
                "y",
                rotationAngle,
                easingFactor,
                delta
            );

            const foldIntensity = i > 8 ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime : 0;
            easing.dampAngle(
                target.rotation,
                "x",
                foldRotationAngle * foldIntensity,
                easingFactorFold,
                delta
            );
        }
    });

    const [_, setPage] = useAtom(pageAtom);

    const [selectedProject, setSelectedProject] =
        useAtom(selectedProjectAtom);

    const [hoveredSide, setHoveredSide] = useState(null);
    const frontHasContent = Boolean(front?.title);
    const backHasContent = Boolean(back?.title);

    useCursor(hoveredSide !== null);

    return (
        <group
            {...props}
            ref={group}

            onPointerEnter={(e) => {
                e.stopPropagation();

                const materialIndex = e.face?.materialIndex;

                if (materialIndex === 4) {
                    setHoveredSide("front");
                } else if (materialIndex === 5) {
                    setHoveredSide("back");
                }
            }}

            onPointerLeave={(e) => {
                e.stopPropagation();
                setHoveredSide(null);
            }}

            onClick={(e) => {
                e.stopPropagation();

                const materialIndex = e.face?.materialIndex;

                if (materialIndex === 4 && frontHasContent) {
                    setSelectedProject(front);
                } else if (materialIndex === 5 && backHasContent) {
                    setSelectedProject(back);
                } else {
                    setPage(opened ? number : number + 1);
                }

                setHoveredSide(null);
            }}
        >
            <primitive object={manualSkinnedMesh} ref={skinnedMeshRef} position-z={-number * PAGE_DEPTH + currentPage * PAGE_DEPTH} />
        </group>
    );
};

export const Book = ({ ...props }) => {
    const [page] = useAtom(pageAtom);
    const [delayedPage, setDelayedPage] = useState(page);

    useEffect(() => {
        if (page === delayedPage) return;

        const direction = page > delayedPage ? 1 : -1;

        const timeout = setTimeout(() => {
            setDelayedPage((current) => current + direction);
        }, 100);

        return () => clearTimeout(timeout);
    }, [page, delayedPage]);

    return (
        <group {...props} rotation-y={-Math.PI / 2}>
            {[...pages].map((pageData, index) => (
                <Page
                    page={delayedPage}
                    key={index}
                    number={index}
                    opened={delayedPage > index}
                    bookClosed={
                        delayedPage === 0 ||
                        delayedPage === pages.length
                    }
                    {...pageData}
                />
            ))}
        </group>
    );
};