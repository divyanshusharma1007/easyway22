import Image from 'next/image'
import Link from 'next/link'
import loginadmin from '../actions/admin/login'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Cookies from "js-cookie";
import login from '../actions/users/login'
import { useState } from 'react'
const _=require('lodash')
export default function Login({ data }) {
    const router = useRouter()
    const getvalues = () => {
        const data = {
            username: prompt("Enter admin user name"),
            password: prompt("Enter admin password"),
            alt: confirm("Are you sure want to loged as admin .")
        }

        return data;
    }
    const [formData, setFormData] = useState({
        "password": "",
        "email": ""
    });

    const onChange = (e) => {
        const key = e?.target?.name;
        let newFromState = _.cloneDeep(formData);
        newFromState[key] = e.target.value;
        setFormData(newFromState);
    }
    const loginUser = async (e) => {
        const data = await login(formData);
        Cookies.set("auth", JSON.stringify(data));
        console.log(Cookies.get('auth'),"here is your auth token")
        alert('loging successfull')
        console.log(Cookies)
        if (!(Cookies.get('auth') === 'undefined')) {
            router.push('/cart');
        } else {
            router.push('/login');
        }
    }
    const loginAdmin = async (e) => {
        const { username, password, alt } = getvalues();
        alert("your process for loging is running please wait ")
        if (alt && password && username) {
            const data = await loginadmin({ username: username, password: password })
            Cookies.set("auth", JSON.stringify(data));
            console.log(data)
            alert('you are loging as admin')
            console.log(typeof (Cookies.get('auth')), 'type of cookie')
            if (!(Cookies.get('auth') === 'undefined')) {
                router.push('/admin');
            } else {
                router.push('/login');
            }
        } else {
            alert("move on");
        }
        return;
    }
    useEffect(() => {
        console.log("changed")
    }, [router.asPath])
    return (
        <section className='flex justify-center bg-gray-300'>
            <section className="h-full gradient-form md:h-auto ">
                <div className="container py-12 px-6 ">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <Image
                                                    className="mx-auto w-48"
                                                    src={require('../public/Images/logo.webp')}
                                                    height={200}
                                                    width={270}
                                                />
                                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Make your Life Easy.</h4>
                                            </div>
                                            <form>
                                                <p className="mb-4">Please login to your account</p>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="email"
                                                        placeholder="email"
                                                        name="email"
                                                        onChange={onChange}
                                                        value={formData?.email}
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        onChange={onChange}
                                                        value={formData?.password}
                                                    />
                                                </div>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-indigo-500  to-fuchsia-600"
                                                        type="button"
                                                        onClick={loginUser}
                                                    >
                                                        Log in
                                                    </button>
                                                    <a className="text-gray-500" href="#!">Forgot password?</a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">Dont have an account?</p>
                                                    <Link href='/signup'>
                                                        <button
                                                            type="button"
                                                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        >
                                                            Join Family                                                   </button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-indigo-500  to-fuchsia-600"
                                    >
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-xl font-semibold mb-6">We are not a company, We are <span onClick={loginAdmin}> family </span></h4>
                                            <p className="text-sm">
                                                we have decided to proivde the servies to you in as easy and good products .we provide the fastest delivery of the grocessary ,vegitables and fruits at your door step.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}