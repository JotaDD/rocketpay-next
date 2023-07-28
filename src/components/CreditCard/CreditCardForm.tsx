"use client";
import Button from "../commons/Button";
import Input from "../commons/Input";

import { InputValuesType } from "@/hooks/useFormInput";

type CreditCardFormType = {
  inputValues: InputValuesType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CreditCardForm = ({ inputValues, handleChange }: CreditCardFormType) => {
  const { number, name, expiration, cvc } = inputValues;

  return (
    <form className=" max-w-xl grid gap-3">
      <Input
        name="number"
        value={ number }
        onChange={ (event) => handleChange(event) }
        className='gap-6' id='card-number'>Número do cartão</Input>

      <Input
        id='card-holder'
        name="name"
        value={ name }
        onChange={ (event) => handleChange(event) }
      >Nome do titular</Input>

      <div>
        <Input
          id='expiration-date'
          name="expiration"
          value={ expiration }
          onChange={ (event) => handleChange(event) }
          className=" flex flex-1" >Expiração</Input>
        <Input id='security-code'
          name="cvc"
          value={ cvc }
          onChange={ (event) => handleChange(event) }
          className=" flex flex-1">CVC</Input>
      </div>

      <Button>ADICIONAR CARTÃO</Button>
    </form>
  );
};
export default CreditCardForm;