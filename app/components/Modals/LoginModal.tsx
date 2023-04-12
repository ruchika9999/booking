"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Button from "../common/Button";
import Heading from "../common/Heading";
import TextInput from "../common/Input/TextInput";
import Modal from "../common/Modal";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import { ConstField } from "@/app/constant/index";
import { getLoginFrom } from "@/app/helper";
import { LoginFormType } from "@/app/types";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = () => {
    if (loginModal.isOpen) {
      loginModal.onClose();
      registerModal.onOpen();
    }
  };

  const useFormMethods = useForm<LoginFormType>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: getLoginFrom(),
    resolver: undefined,
  });

  const { handleSubmit } = useFormMethods;

  const onSubmit: SubmitHandler<LoginFormType> = (values) => {
    setIsLoading(true);
    signIn("credentials", { ...values, redirect: false }).then((callBack) => {
      setIsLoading(false);
      if (callBack?.ok) {
        router.refresh();
        loginModal.onClose();
      }
      if (callBack?.error) {
        console.log(callBack.error);
      }
    });
  };

  const onError: SubmitErrorHandler<LoginFormType> = (values) => {};
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" />
      <TextInput errors={false} label={ConstField.EMAIL} type="text" />
      <TextInput errors={false} label={ConstField.PASSWORD} type="password" />
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
            Register
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <FormProvider {...useFormMethods}>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit, onError)}
        body={bodyContent}
        footer={footerContent}
      />
    </FormProvider>
  );
};

export default LoginModal;
