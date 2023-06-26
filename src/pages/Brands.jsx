import TableBrands from "../components/TableBrands";
import CreateBrand from "../components/CreateBrand";

function Brands() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Brands</h1>
        <CreateBrand />
        <TableBrands />
      </div>
    </>
  );
}

export default Brands;
