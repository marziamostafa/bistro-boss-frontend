import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })

    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("name", { required: true })}
                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("photoUrl", { required: true })}
                                />
                                {errors.photoUrl && <span className="text-red-500">Photo URL is required</span>}
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>

                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="pasword" placeholder="password" className="input input-bordered" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} />
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at laest 6 characters</span>}

                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 characters</span>}

                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have at least one upper case, one lower case and one special character</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;