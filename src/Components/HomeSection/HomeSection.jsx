import React from 'react'
import { Avatar } from '@mui/material'
import user1 from '../../assets/user1.webp'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Post text is required").max(280, "Post cannot exceed 280 characters"),
})

const HomeSection = () => {
  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  })

  return (
    <div className='space-y-5'>
      <section>
        <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
      </section>
      <section className='pb-10'>
        <div className='flex space-x-5'>
          <Avatar alt="username" src={user1} />
          <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What's happening?"
                  className='border-none outline-none text-xl bg-transparent w-full h-10'
                  {...formik.getFieldProps("content")}
                />
                {formik.touched.content && formik.errors.content && (
                  <div className="text-red-500 text-sm">{formik.errors.content}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection
//testing 2
