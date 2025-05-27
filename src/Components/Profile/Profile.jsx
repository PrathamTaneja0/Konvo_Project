import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import moon from '../../assets/moon.jpg';
import { Avatar, Button } from '@mui/material';
import usericon from '../../assets/usericon.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import verify from '../../assets/verify.png';

const Profile = () => {

const handleOpenProfileModel = () => {
    console.log("open profile model");
}


const handleFollowUser = () => {
    console.log("follow user");
}

const navigate = useNavigate();
const handleBack = () => {
    navigate(-1);
}

  return (
    <div>
        <section className= {'z-50 flex items-center sticky top-0 bg-opacity-95'}>
            <KeyboardBackspaceIcon className = 'cursor-pointer' onClick={handleBack} />
            <h1 className= {'text-xl font-bold py-5 opacity-90 ml-5'}>Profile</h1>
        </section>
        <section className="relative">
            <img className='w-full h-[15rem] object-cover' src={moon} alt="profile" />
            <Avatar
                alt="snax"
                src={usericon}
                sx={{
                  width: '8rem',
                  height: '8rem',
                  border: '4px solid white',
                  position: 'absolute',
                  left: '2rem',
                  bottom: '-4rem',
                  bgcolor: 'white',
                }}
            />
            
            {/* eslint-disable-next-line no-constant-condition */}
            {true? ( <Button
                onClick={handleOpenProfileModel}
                variant='contained'
                sx={{
                  borderRadius: '20px',
                  position: 'absolute',
                  right: '2rem',
                  bottom: '-4rem',
                  paddingX: '1.5rem',
                  paddingY: '0.5rem',
                }}
            >
                Edit Profile
            </Button>): 
            (<Button
                onClick={handleFollowUser}
                variant='contained'
                sx={{
                  borderRadius: '20px',
                  position: 'absolute',
                  right: '2rem',
                  bottom: '-4rem',
                  paddingX: '1.5rem',
                  paddingY: '0.5rem',
                }}>
            {/* eslint-disable-next-line no-constant-condition */}
            {true? "Follow" : "Unfollow"}</Button>)}
        </section>
        <div style={{ height: '4rem' }} />
        <div className='flex items-center' >
            <h1 className='font-bold text-lg'>Snax Dark</h1>

            {/* eslint-disable-next-line no-constant-condition */}
             {true &&(  <img className="w-4 h-4 ml-2" src={verify} alt="verified" />)}
        

        </div>
        <h1 className='text-gray-500'>@Snax123</h1>
        <div className='mt-2 space-y-3'>
            <p>Hello, I am Snax Dark</p>
            <div className='py-1 flex space-x-5'>
                <div className='flex items-center text-gray-500'>
                    <BusinessCenterIcon />
                    <p className='ml-2'>OTH Regensburg</p>
                </div>
                <div className='flex items-center text-gray-500'>
                    <LocationOnIcon />
                    <p className='ml-2'>Regensburg</p>
                </div>
                <div className='flex items-center text-gray-500'>
                    <CalendarMonthIcon />
                    <p className='ml-2'>Joined: June, 2025</p>
                </div>
            </div>
            <div className='flex items-center space-x-5'>
                <div className='flex items-center space-x-1 '>
                    <span className='font-semibold'>540</span>
                    <span className="ml-1 text-gray-500">Following</span>
                </div>
                <div className='flex items-center space-x-1 '>
                    <span className='font-semibold'>590</span>
                    <span className="ml-1 text-gray-500">Followers</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile