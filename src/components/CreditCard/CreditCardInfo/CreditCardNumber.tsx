type CreditCardNumberProps = {
  number: string;
}
const CreditCardNumber = ({number}: CreditCardNumberProps) => {
  return (
    <div className=" text-[#E8E8E8] font-bold text-4xl tracking-wider  relative">
      { number ? number : '1234 5678 9012 3456'}
    </div>
  );
};
export default CreditCardNumber;