import { SelectButton, SelectButtonChangeEvent } from "primereact/selectbutton";
import { useState } from "react";
import Visa from "../../assets/Visa.png";
import Mastercard from "../../assets/Mastercard.png";
import AppInput from "../../common/Input";

const Payment = () => {
  const [value, setValue] = useState<string>(Visa);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvvCode: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const justifyOptions: any[] = [Visa, Mastercard];

  const justifyTemplate = (option: any) => {
    return (
      <div
        className={`bg-gray-100 rounded-2xl flex justify-center w-full lg:w-96 py-6 ${
          value === option ? "border-[1px] border-lightBlue" : ""
        }`}
      >
        <img className="w-20 h-16 object-contain" src={option} alt="news" />
      </div>
    );
  };
  return (
    <div className="max-w-[85%]  mx-auto mt-24 mb-40 flex flex-col gap-20 ">
      <h1 className="text-left  text-darkBlue text-2xl sm:text-3xl font-bold">
        Payment Details
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <section>
          <h2 className="text-left  text-darkBlue text-lg mb-4  font-medium">
            Card Number
          </h2>

          <SelectButton
            value={value}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            onChange={(e: SelectButtonChangeEvent) => setValue(e.value)}
            itemTemplate={justifyTemplate}
            optionLabel="value"
            options={justifyOptions}
          />
        </section>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[10%] gap-y-10">
          <AppInput
            type="text"
            title="Card Number"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <AppInput
            type="date"
            title="Expiry Date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <AppInput
            type="text"
            title="CVV Code"
            placeholder="CVV Code"
            name="cvvCode"
            value={formData.cvvCode}
            onChange={handleChange}
          />
          <AppInput
            type="email"
            title="Postal Code"
            placeholder="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className=" bg-darkBlue px-24 py-3 rounded-xl !text-white  mx-auto hover:bg-darkBlue/75 mt-10 "
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
