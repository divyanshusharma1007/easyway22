import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const _ = require('lodash')
import signup from '../actions/users/signup'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
export default function Signupuser() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    "username": "",
    "password": "",
    "email": "",
    "contactnumber": "",
    "address": ""
  });

  const onChange = (e) => {
    const key = e?.target?.name;
    let newFromState = _.cloneDeep(formData);
    newFromState[key] = e.target.value;
    setFormData(newFromState);
  }
  const signUpUser = async (e) => {
    const data = await signup(formData);
    console.log("sign up exchanged");
    Cookies.set("auth", JSON.stringify(data));
    alert('loging successfull')
    console.log(Cookies.get('auth'))
    console.log(typeof (Cookies.get('auth')), 'type of cookie')
    if (!(Cookies.get('auth') === 'undefined')) {
      router.push('/cart');
    } else {
      router.push('/signup');
    }
  }
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
                          src={require('../public/Images/basket.png')}
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Make your Life Eassy.</h4>
                      </div>
                      <form>
                        <p className="mb-4 mx-auto">Join our Family</p>
                        <div>
                          <div className="mb-4 flex justify-between flex-col md:flex-row">
                            <input
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2"
                              id="username"
                              placeholder="userName"
                              value={formData?.username}
                              name="username"
                              onChange={onChange}
                            />
                            <input
                              type="password"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2"
                              id="password"
                              placeholder="Password"
                              name="password"
                              value={formData?.password}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="email"
                            value={formData?.email}
                            name="email"
                            onChange={onChange}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="number"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2"
                            id="number"
                            placeholder="contact number"
                            value={formData?.contactnumber}
                            name="contactnumber"
                            onChange={onChange}
                          />
                        </div>
                        <div className="mb-4">
                          <textarea
                            type=""
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="address"
                            placeholder="currenct address"
                            name="address"
                            value={formData?.address}
                            onChange={onChange}
                          />
                        </div>

                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-indigo-500  to-fuchsia-600"
                            type="button"
                            onClick={signUpUser}
                          >
                            Join Family
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Already Member </p>
                          <Link href='/login'>
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            >
                              Login                                                 </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-indigo-500  to-fuchsia-600"
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">We are not a company, We are family</h4>
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
