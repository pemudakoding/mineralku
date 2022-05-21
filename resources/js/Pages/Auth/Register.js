import React, { useEffect } from 'react';
import {
    Button,
    Input,
    Label,
    ValidationErrors
} from '@/Components';
import Guest from '@/Layouts/Guest';
import { Head, useForm } from '@inertiajs/inertia-react';

const Register = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        birthday: '',
        phone_number: '',
        province: '',
        subdistrict: '',
        village: '',
        address: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
       <Guest>
           <Head title="Daftar" />
           
           {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />
            <div className="section-auth">
                <div className="auth-wrapper">
                    <div className="container">
                        <div className="auth-head">
                            <h3 className='font-medium fredoka-one text-black text-3xl text-center'>Daftar</h3>
                        </div>
                        <form onSubmit={submit}>
                            <div className="form-section mt-10 mb-8">
                                <div className='name grid grid-cols-2 gap-4 mb-5'>
                                    <div>
                                        <Label forInput="first_name" value="Nama Depan" />

                                        <Input
                                            type="text"
                                            name="first_name"
                                            value={data.first_name}
                                            className="mt-1 block w-full"
                                            autoComplete="first_name"
                                            isFocused={true}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <div>
                                        <Label forInput="last_name" value="Nama Belakang" />

                                        <Input
                                            type="text"
                                            name="last_name"
                                            value={data.last_name}
                                            className="mt-1 block w-full"
                                            autoComplete="last_name"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='birthday mb-5'>
                                    <div>
                                        <Label forInput="birthday" value="Tanggal Lahir" />

                                        <Input
                                            type="date"
                                            name="birthday"
                                            value={data.birthday}
                                            className="mt-1 block w-full"
                                            autoComplete="birthday"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='address mb-5'>
                                    <div>
                                        <Label forInput="address" value="Alamat" />

                                        <Input
                                            type="text"
                                            name="address"
                                            value={data.address}
                                            className="mt-1 block w-full"
                                            autoComplete="address"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='address-detail grid grid-cols-3 gap-4 mb-5'>
                                    <div>
                                        <Label forInput="village" value="Kelurahan" />

                                        <Input
                                            type="text"
                                            name="village"
                                            value={data.village}
                                            className="mt-1 block w-full"
                                            autoComplete="village"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <div>
                                        <Label forInput="subdistrict" value="Kecamatan" />

                                        <Input
                                            type="text"
                                            name="subdistrict"
                                            value={data.subdistrict}
                                            className="mt-1 block w-full"
                                            autoComplete="subdistrict"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                    <div>
                                        <Label forInput="province" value="Provinsi" />

                                        <Input
                                            type="text"
                                            name="province"
                                            value={data.province}
                                            className="mt-1 block w-full"
                                            autoComplete="province"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='username mb-5'>
                                    <div>
                                        <Label forInput="username" value="Username" />

                                        <Input
                                            type="text"
                                            name="username"
                                            value={data.username}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='email mb-5'>
                                    <div>
                                        <Label forInput="email" value="Email" />

                                        <Input
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="email"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='password mb-5'>
                                    <div>
                                        <Label forInput="password" value="Password" />

                                        <Input
                                            type="text"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="password"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='confirm_password mb-5'>
                                    <div>
                                        <Label forInput="confirm_password" value="Konfirmasi Password" />

                                        <Input
                                            type="text"
                                            name="confirm_password"
                                            value={data.confirm_password}
                                            className="mt-1 block w-full"
                                            autoComplete="confirm_password"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className='phone_number mb-5'>
                                    <div>
                                        <Label forInput="phone_number" value="Nomor Whatsapp" />

                                        <Input
                                            type="text"
                                            name="phone_number"
                                            value={data.phone_number}
                                            className="mt-1 block w-full"
                                            autoComplete="phone_number"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-footer flex justify-center">
                                <Button
                                    type='button'
                                    method='post'
                                    title='DAFTAR'
                                    style='primary'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    );
}

export default Register
