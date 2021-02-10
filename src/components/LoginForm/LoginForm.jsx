import React, { useContext, useEffect, useState } from 'react';
import bemCssModules from 'bem-css-modules';
import Modal from '../Modal/Modal'
import request from '../../helpers/request'

import { default as LoginFormStyles } from './LoginForm.module.scss'

import { StoreContext} from '../../store/StoreProvider'

const style = bemCssModules(LoginFormStyles);

const LoginForm = ({handleOnClose, isModalOpen}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const { setUser } = useContext(StoreContext);
    const validateMessageComponent = validateMessage.length ? <p className={style('validate-message')}>{validateMessage}</p> : null

    const handleOnChangeLogin = event => setLogin(event.target.value)
    const handleOnChangePassword = event => setPassword(event.target.value)
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();
    }

    const resetStateOfInputs = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');
    }

    const handleOnSubmit = async event => {
        event.preventDefault();
        const {data, status} = await request.post(
            '/users',
            {login, password}
            );
            if(status === 200){
                setUser(data.user);
                resetStateOfInputs();
                handleOnClose();
            } else {
                setValidateMessage(data.message)
            }
    }

    useEffect(()=> {
        if(isModalOpen){
            resetStateOfInputs()
        }
        
    },[isModalOpen])

    return ( 
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeCloseOnOutsideClick={true}>
            {validateMessageComponent}
            <form className={style()} method="post" onSubmit={handleOnSubmit}>
                <div className={style('row')}>
                    <label>
                        Login:{" "}
                        <input className={style('input')} onChange={handleOnChangeLogin} type="text" value={login}>
                        </input>
                    </label>
                </div>
                <div className={style('row')}>
                <label>
                    Hasło:{" "}
                        <input className={style('input')} onChange={handleOnChangePassword} type="password" value={password}>
                        </input>
                    </label>
                </div>
                <div className={style('row')}>
                    <button className={style('button')} type="submit">Zaloguj</button>
                    <button className={style('button')} onClick={handleOnCloseModal} type="button">Anuluj</button>
                </div>
            </form>
        </Modal>
     );
}
 
export default LoginForm;