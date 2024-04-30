const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]); //english to persian

const p2e = (
  s //persian to english
) => s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  //english to persian with comma seperators
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
