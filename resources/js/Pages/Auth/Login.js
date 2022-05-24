import React, { useEffect } from 'react';
import { Button, Input, Label, Checkbox, ValidationErrors } from '@/Components';
import Guest from '@/Layouts/Guest';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === 'checkbox' ? event.target.checked : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Masuk" />
            <div className="section-auth">
                <div className="auth-wrapper">
                    <div className="container">
                        <div className="auth-head mb-5">
                            <h3 className="font-medium fredoka-one text-black text-3xl text-center">
                                Masuk
                            </h3>
                        </div>
                        <form onSubmit={submit}>
                            {status && (
                                <div className="mb-4 font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}
                            <ValidationErrors errors={errors} />
                            <div className="form-section mt-5 mb-8">
                                <div className="email mb-5">
                                    <div>
                                        <Label forInput="email" value="Email" />

                                        <Input
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="email"
                                            isFocused={true}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className="password mb-5">
                                    <div>
                                        <Label forInput="password" value="Password" />

                                        <Input
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="password"
                                            isFocused={false}
                                            handleChange={onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth-footer flex justify-center">
                                <Button
                                    type="button"
                                    as="button"
                                    method="post"
                                    title="MASUK"
                                    style="primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
