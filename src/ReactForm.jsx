import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// React Form with Zod 

// Validation schema with Zod
const schema = z.object({
  firstName: z.string().trim().nonempty("First name is required"),
  lastName: z.string().trim().nonempty("Last name is required"),
  email: z.string().trim().email("Enter a valid email").nonempty("Email is required"),
  idCard: z
    .number()
  .int("ID Card must be an integer")
  .min(100000000000000, "ID Card must be at least 15 digits") // smallest 15-digit number,
});

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      idCard: "",
    },
  });

  // On form submit
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API call
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Registration Form</h2>

        {/* First Name */}
        <div>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* ID Card */}
        <div>
          <input
            {...register("idCard", {valueAsNumber: true})}
            type="number"
            placeholder="ID Card Number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.idCard && (
            <p className="text-red-500 text-sm">{errors.idCard.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactForm;
