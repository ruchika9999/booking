"use client";

import { useState } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { ConstField } from "@/app/constant/index";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import { getRegisterFrom } from "@/app/helper";
import { RegisterFormType } from "@/app/types";
import Button from "../common/Button";
import Heading from "../common/Heading";
import TextInput from "../common/Input/TextInput";
import Modal from "../common/Modal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = () => {};

  const useFormMethods = useForm<RegisterFormType>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: getRegisterFrom(),
    resolver: undefined,
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit: SubmitHandler<RegisterFormType> = (values) => {
    console.log("values==>", values);
  };

  const onError: SubmitErrorHandler<RegisterFormType> = (values) => {};
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" />
      <TextInput errors={false} label={ConstField.EMAIL} type="text" />
      <TextInput errors={false} label={ConstField.PASSWORD} type="password" />
      <TextInput errors={false} label={ConstField.NAME} type="text" />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer
              hover:underline
            "
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <FormProvider {...useFormMethods}>
      <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit, onError)}
        body={bodyContent}
        footer={footerContent}
      />
    </FormProvider>
  );
};

export default RegisterModal;
