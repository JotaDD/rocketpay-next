import Button from "../commons/Button";
import Input from "../commons/Input";



const CreditCardForm = () => {

  return (
    <form className=" max-w-xl grid gap-3">
      <Input className='gap-6' id='card-number'>Número do cartão</Input>

      <Input id='card-holder'>Nome do titular</Input>

      <div>
        <Input id='expiration-date' className=" flex flex-1" >Expiração</Input>
        <Input id='security-code' className=" flex flex-1">CVC</Input>
      </div>

      <Button>ADICIONAR CARTÃO</Button>
    </form>
  );
};
export default CreditCardForm;