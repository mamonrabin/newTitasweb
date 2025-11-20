"use client";
import Swal from "sweetalert2";
import { exo } from "../app/font";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  number: string;
  service: string;
  company: string;
  budjet: string;
  details: string;
};
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
     reset,
  } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    Swal.fire({
      title: "Success!",
      text: "Your message has been submitted successfully. or if you want immediately response you can send a text in email or whats app +8801746770324",
      
      icon: "success",
      confirmButtonText: "OK",
    });

    reset(); // Clears the form
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 w-full flex flex-col gap-4"
    >
      <div className="flex lg:flex-row flex-col items-center gap-4">
        <div className="w-full">
          <input
            {...register("name", { required: true })}
            className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
            type="text"
            placeholder="Your Name *"
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        <div className="w-full">
          <input
            {...register("email", { required: true })}
            className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
            type="email"
            placeholder="Email Address *"
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-4">
        <div className="w-full">
          <input
            {...register("number", { required: true })}
            className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
            type="text"
            placeholder="Your Number *"
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <select 
        {...register("service")}
        className="w-full px-4 py-3 border border-gray-300 rounded outline-none">
          <option value="">Select Service</option>
          <option value="fullstack">Full Stack Development</option>
          <option value="ecommerce">Ecommerce Website</option>
          <option value="custome">Custome Website</option>
          <option value="graphices">Graphices Solution</option>
        </select>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-4">
        <select 
        {...register("budjet")}
        className="w-full px-4 py-3 border border-gray-300 rounded outline-none">
          <option value="">Project Budjet Range</option>
          <option value="10000">Under TK.10000</option>
          <option value="10000-20000">TK. 10000-20000</option>
          <option value="20000-30000">TK. 20000-30000</option>
          <option value="30000-40000">TK. 30000-40000</option>
          <option value="discuss">Let&apos;s discuss based on requirements</option>
        </select>
        <input
        {...register("company")}
          className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
          type="text"
          placeholder="Your Company Name"
        />
      </div>

      <div>
        <textarea
        {...register("details")}
          className="w-full px-4 py-3 border border-gray-300 rounded outline-none"
          placeholder="Tell us about your project goals, timeline, and any specific requirements. The more details you provide, the better we can prepare for our consultation. *"
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <div>
        <input
          className={`${exo.className} px-8 py-4 rounded bg-[#2B748A] hover:bg-[#3AC2CF] duration-300 text-white font-medium cursor-pointer`}
          type="submit"
          value="Get Free Consultation →"
        />
      </div>
    </form>
  );
};

export default ContactForm;
