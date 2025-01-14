interface ITotalPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: ITotalPrice): number => {
  if (isInstallment && months > 0 && discount>0) {
    return (price - (price * discount) / 100) / months;
  }else if(isInstallment && discount>0){
    return (price - (price * discount) / 100)
  }
  return price ;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 0,
});
console.log(price); // 6250
