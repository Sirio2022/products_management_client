import Form from '../../components/create-product-form/Form'

export default function NewProduct() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h2 className="text-4xl font-extrabold text-slate-500 uppercase mb-10">
          Add new product
        </h2>
      </div>

      <Form />
    </>
  )
}
