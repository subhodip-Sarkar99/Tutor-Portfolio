
import { Footer } from "../components/Footer";
import Timeline from "../components/Timeline"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export const AboutMe = () => {



	return (
		<>

			<section className="bg-gray-50 text-gray-800">


				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div>
						<img src="/images/upto-g10.png" alt="" />
						<h1 className="text-2xl lg:text-[3.5rem] font-Montserrat leading-8 font-bold mt-5">Subhodip Sarkar</h1>
					</div>
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">Your One Stop Solution For Offline Private{" "}
							<span className="text-sky-600">{" "}Tutor{" "}</span>{" "}Near<span className="text-sky-600">{" "}RUBY</span>{" "}Area
						</h1>
						<p className="mt-3 p-2 lg:mt-6 mb-8 text-lg sm:mb-12 font-Montserrat lg:text-[1.5rem]">"Education is the most powerful weapon which you can use to change the world."<br />
							<span className="lg:ml-9"> - Nelson Mandela </span>
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<motion.div className="p-6"
								whileHover={{
									scale: 1.15,
									rotate: "2.0deg"
								}}
								whileTap={{
									scale: 0.85,
									rotate: "-2.0deg"
								}}
							>
								<Link to="/contact" className="px-8 py-3 text-lg font-semibold rounded bg-sky-600 text-gray-50">Contact</Link>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.15,
									rotate: "-2.0deg"
								}}
								whileTap={{
									scale: 0.85,
									rotate: "2.0deg"
								}}
							>
								<Link to="/courses" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 transition hover:bg-gray-500 hover:text-white ">My Courses</Link>
							</motion.div>
						</div>
					</div>

				</div>
			</section>
			<Timeline />

			<section className="m-1 lg:mt-0 bg-gray-50 lg:p-2">
				<h1 className="text-xl lg:text-[2.6rem] text-center font-Montserrat text-gray-800 font-bold lg:my-10">My Socials</h1>
				<div className="mt-8">
					<motion.div className="box"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 2.2 }}
					>
						<ul>
							<div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
								<li className=" transition hover:scale-150 delay-100 my-3">
									<a href="https://www.facebook.com/" target="_blank">
										<img src="/images/fb-logo.png" alt="Facebook" width={150} height={150} />
									</a>
								</li>

								<li className=" transition hover:scale-150 delay-100 my-1">
									<a href="https://www.instagram.com/" target="_blank">
										<img src="/images/insta-logo.png" alt="Instagram" width={150} height={150} />
									</a>
								</li>

								<li className=" transition hover:scale-150 delay-100 my-3">
									<a href="https://www.youtube.com/" target="_blank">
										<img src="/images/youtube-logo.png" alt="Youtube" width={150} height={150} />
									</a>
								</li>
							</div>
						</ul>
					</motion.div>
				</div>
			</section>
			<Footer />
		</>
	)
}
