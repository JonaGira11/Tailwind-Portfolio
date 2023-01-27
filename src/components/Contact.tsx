import React from 'react'

export const Contact = () => {
    return (
        <section id='contact' className="py-5 dark:bg-neutral-800 ">
            <div className=' max-w-5xl mx-auto p-4 py-16 md:pl-20'>
                <div className="pb-10">
                    <h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline">Contact</h2>
                </div>
                <form action='' method='POST' encType="multipart/form-data" >
                    <div>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" />
                        </div>
                    </div>
                </form>
            </div>


        </section>
    )
}
