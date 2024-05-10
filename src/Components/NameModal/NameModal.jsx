
import React, { useState, useContext } from 'react';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/slices/auth/authSlice';
import { Input } from '../ui/input';
import '../NameModal/NameModal.css'


const NameModal = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.auth.userName);

    const handleLogin = (name) => {
        //console.log(name);
        dispatch(login(name));
    };


    return (
        <div className="input">
            <Input className="textbox" type="text"value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <Button size="sm" onClick={() => handleLogin(name)}>Sign In</Button>
        </div>
    );
};

export default NameModal;
