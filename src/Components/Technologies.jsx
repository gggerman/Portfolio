import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './Technologies.css';

import { Icon } from '@iconify/react';
import fileTypeHtml from '@iconify/icons-logos/html-5';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import phpIcon from '@iconify/icons-logos/php';
import laravelIcon from '@iconify/icons-logos/laravel';
import goIcon from '@iconify/icons-logos/go';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import tailwindIcon from '@iconify/icons-logos/tailwindcss-icon';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressIcon from '@iconify/icons-simple-icons/express';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import mongodbIcon from '@iconify/icons-vscode-icons/file-type-mongo';
import gitIcon from '@iconify/icons-logos/git-icon';
import githubIcon from '@iconify/icons-logos/github-icon';

const Technologies = () => {
    return (
        <>
        <Grid container className='custom_section pt_45'>
                <Grid container justify='space-around'>

                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={fileTypeHtml}/>
                                <Typography className='service_title' variant='h6'>HTML5</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={fileTypeCss}/>
                                <Typography className='service_title' variant='h6'>CSS3</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={javascriptIcon}/>
                                <Typography className='service_title' variant='h6'>JavaScript</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={typescriptIcon}/>
                                <Typography className='service_title' variant='h6'>TypeScript</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={phpIcon}/>
                                <Typography className='service_title' variant='h6'>PHP</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={laravelIcon}/>
                                <Typography className='service_title' variant='h6'>Laravel</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={goIcon}/>
                                <Typography className='service_title' variant='h6'>GO</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={reactIcon}/>
                                <Typography className='service_title' variant='h6'>React</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={reduxIcon}/>
                                <Typography className='service_title' variant='h6'>Redux</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={tailwindIcon}/>
                                <Typography className='service_title' variant='h6'>Tailwind</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={nodejsIcon}/>
                                <Typography className='service_title' variant='h6'>Node</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={expressIcon}/>
                                <Typography className='service_title' variant='h6'>Express</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={postgresqlIcon}/>
                                <Typography className='service_title' variant='h6'>PostgreSQL</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={sequelizeIcon}/>
                                <Typography className='service_title' variant='h6'>Sequelize</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={mongodbIcon}/>
                                <Typography className='service_title' variant='h6'>MongoDB</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon="devicon:mongoose" />
                                <Typography className='service_title' variant='h6'>Mongoose</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon="mdi:docker" />
                                <Typography className='service_title' variant='h6'>Docker</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={gitIcon}/>
                                <Typography className='service_title' variant='h6'>Git</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='custom_service'>
                                <Icon icon={githubIcon}/>
                                <Typography className='service_title' variant='h6'>GitHub</Typography>
                            </div>
                        </Grid>
                </Grid>
            <Grid item xs={12}></Grid>
        </Grid>


        </>
    )
}

export default Technologies
