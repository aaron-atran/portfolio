import Globe from "react-globe.gl";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from '../util.js/ThemeContext.jsx';
import { Button } from '../util.js/Button.jsx';
import { BoxGeometry, MeshLambertMaterial, Mesh } from 'three';

const DARK_GLOBE = '//unpkg.com/three-globe/example/img/earth-night.jpg';
const LIGHT_GLOBE = '//unpkg.com/three-globe/example/img/earth-day.jpg'


export const Bento = () => {
    const myData = [
        { lat: 35.7749, lng: -82.4194, size: 0.5, name: 'Tennessee' },
        { lat: 41.7128, lng: -86.0060, size: 0.7, name: 'Illinois' },
        { lat: 33.7749, lng: -83.4194, size: 0.5,  name: 'Georgia' },
        { lat: 27.7749, lng: -81.4194, size: 0.5,  name: 'Florida' },
        { lat: 41.5074, lng: 13.1278, size: 0.6, name: 'Italy' }
    ];

    const globeRef = useRef();;
    const theme = useContext(ThemeContext);
    let [globeTexture, setGlobeTexture] = useState('//unpkg.com/three-globe/example/img/earth-night.jpg');

    useEffect(() => {
        if(globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 1.2;
        }
        if (theme.theme === 'light') setGlobeTexture(LIGHT_GLOBE);
        else setGlobeTexture(DARK_GLOBE)

    }, [theme]);

    const handleHoverIn = () => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = false;
        }
    };

    const handleHoverOut = () => {
        if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        }
    };

    return (
        <section className="bento c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="src/assets/Cute Avatar.png" alt="grid-1" className="w-full sm:h-69 h-64 object-contain" />
                        <div>
                            <p className="grid-headtext">Who I Am</p>
                            <p className="grid-subtext">A highly motivated and creative Web Developer on a 
                            mission to turn imaginative ideas into seamless, user-centric digital 
                            experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="src/assets/laptop.svg" alt="grid-2" className="w-full sm:w-69 h-64 object-contain" />
                        <div>
                            <p className="grid-headtext">What I Bring</p>
                            <p className="grid-subtext">With a passion for coding and a knack for problem-solving, 
                            I bring a blend of technical expertise and a keen eye for design to the 
                            ever-evolving landscape of web development.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h[326px] h-fit justify-center items-center">
                            <Globe 
                                className="bento-globe"
                                ref={globeRef}
                                height={500} 
                                width={326} 
                                backgroundColor="rgba(0, 0, 0, 0)" 
                                backgroundImageOpacity={0.5}
                                pointsData={myData}
                                customThreeObject={(d) => {
                                    const geometry = new BoxGeometry(d.size, d.size, d.size);
                                    const material = new MeshLambertMaterial({ color: d.color });
                                    const mesh = new Mesh(geometry, material);
                                    
                                    mesh.rotation.x = Math.PI / 2; 
                                    return mesh;
                                }} 
                                onPointClick={(d) => alert(`I've worked with clients based in ${d.name}`)}
                                onPointHover={(point) => (point ? handleHoverIn() : handleHoverOut())}
                                showAtmosphere 
                                showGraticules 
                                globeImageUrl={globeTexture} 
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Working With Most Time Zones</p>
                            <p className="grid-subtext">I'm based in Minnesota, and available to work with people remotely.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="src/assets/undraw_code-thinking_tqs9.svg" alt="grid 3" className="w-full sm:h-66.5 h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Improving Myself</p>
                            <p className="grid-subtext">When I'm not working, I am actively trying to improve myself, polish my skills, and stay up to date with modern practices.</p>
                        </div>
                    </div>  
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="src/assets/undraw_comment-sent_8c4r.svg" alt="grid-4" className="w-full md:h-40 sm:h-69 h-fit object-fit" />
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Have any questions? Contact to learn more!</p>
                            <Button name="Let's Connect" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}