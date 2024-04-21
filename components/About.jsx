import React from 'react';
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Devlmg from './Devlmg';
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ye Htet Aung',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+66 094 156 7809',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'yehtet@mim.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 5 Aug, 1992',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master On Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Chiang Mai, Thailand',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor of Science',
                years: '2015 - 2018',
            },
            {
                university: 'Another University',
                qualification: 'Master of Arts',
                years: '2019 - 2021',
            },
            {
                university: 'Yet Another University',
                qualification: 'Ph.D in Computer Science',
                years: '2021 - Present',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc.',
                role: 'Software Engineer',
                years: '2015 - 2018',
            },
            {
                company: 'XYZ Corporation',
                role: 'Senior Developer',
                years: '2019 - 2021',
            },
            {
                company: 'Tech Innovators',
                role: 'Lead Developer',
                years: '2021 - Present',
            },
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Social Media Marketing',
            },
            {
                name: 'Digital Media Planning',
            },
            {
                name: 'Digital Media Buying',
            },
            {
                name: 'Digital Marketing Strategies',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/fb.jpeg',
            },
            {
                imgPath: '/about/cm.svg',
            },
            {
                imgPath: '/about/dv.png',
            },
            {
                imgPath: '/about/google.svg',
            },
            {
                imgPath: '/about/tt.svg',
            },
            {
                imgPath: '/about/adsense.png',
            },
            {
                imgPath: '/about/gm.png',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className="container mx-auto">
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'> About me </h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className='hidden xl:flex flex-1 relative'>
                        <Devlmg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/dev.png' />
                    </div>
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value='personal'> Personal Info </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='qualifications'> Qualifications </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='skills'> Skills </TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'> Unveiling the Secrets to My 10 Years of Expertise </h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'> I specialize in crafting intuitive websites, as well as executing strategic digital marketing campaigns and media planning and buying, all tailored to deliver exceptional results. </p>
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => (
                                                <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'> Language Skill </div>
                                            <div className="border-b border-border"> </div>
                                            <div> English, Myanmar </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'> My Awesome Journey </h3>
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'> {getData(qualificationData, 'experience').title} </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((item, index) => (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'> </div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'> {item.company} </div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'> {item.role} </div>
                                                                <div className='text-base font-medium'> {item.years} </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'> {getData(qualificationData, 'education').title} </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((item, index) => (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'> </div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'> {item.university} </div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'> {item.qualification} </div>
                                                                <div className='text-base font-medium'> {item.years} </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'> Tools I Use Everyday </h3>
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'> Skills </h4>
                                            <div className='border-b border-border mb-4'> </div>
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => (
                                                    <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                        <div className='font-medium'> {item.name} </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'> Tools </h4>
                                            <div className='border-b border-border mb-4'> </div>
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'tools').data.map((item, index) => (
                                                    <div key={index}>
                                                        <Image src={item.imgPath} width={58} height={48} alt='' priority />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
