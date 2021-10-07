import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './Technologies.css';

import { Icon } from '@iconify/react';
import fileTypeHtml from '@iconify/icons-logos/html-5';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import materialUi from '@iconify/icons-logos/material-ui';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import expressIcon from '@iconify/icons-simple-icons/express';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import gitIcon from '@iconify/icons-logos/git-icon';
import githubIcon from '@iconify/icons-logos/github-icon';
import mongodbIcon from '@iconify/icons-vscode-icons/file-type-mongo';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
// import bootstrapIcon from '@iconify-icons/logos/bootstrap';


const Technologies = () => {
    return (
        <>
        <Grid container className='custom_section pt_45'>
            <Grid item className='custom_section_title mb_30'>
                <Typography variant='h6' className='custom_section_title_text'>Technologies</Typography>
            </Grid>
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
                                <Icon icon={materialUi}/>
                                <Typography className='service_title' variant='h6'>Material UI</Typography>
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
