import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { BenefitsType } from '@/shared/types';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const benefits: Array<BenefitsType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Our modern and cutting-edge facilities provide the perfect environment for innovation and success."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Facilities",
        description: "Our modern and cutting-edge facilities provide the perfect environment for innovation and success."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our modern and cutting-edge facilities provide the perfect environment for innovation and success."
    },
]
type Props = {
    setSelectedPage: (value: string) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage("Benefits")}
            >

                {/* Header */}
                <motion.div className="md:w--3/5 md:my-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to get you to your fitness goals with ease. We provide true care in to each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}>
                    {benefits.map((benefit: BenefitsType) =>
                        <Benefit key={benefit.title} icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage} />
                    )}
                </motion.div>

                {/* Graphics and description */}
                <div className='mt-16 items-center justify-between gap-20 md: mt-28 md:flex'>
                    {/*Graphic */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* description */}
                    <div>
                        {/* title */}
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >

                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>.
                                </HText>
                            </motion.div>
                        </div>
                        {/* description */}
                        <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}>
                            <p className="my-5">
                                Join our community of millions who are achieving their fitness goals and living healthier lives. Experience the joy and satisfaction of getting fit with our expert support and state-of-the-art resources.
                            </p>
                            <p className="mb-5">
                                Transform your life with us, where millions are already enjoying a healthier lifestyle. Be part of a vibrant community dedicated to fitness and well-being.
                            </p>
                        </motion.div>
                        
                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>

                            </div>
                        </div>
                    </div>

                </div>



            </motion.div>
        </section>
    )
}

export default Benefits