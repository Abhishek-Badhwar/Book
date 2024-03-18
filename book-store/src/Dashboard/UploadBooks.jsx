import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { addbookstore } from '../api';

const UploadBooks = () => {

    const bookscategories = [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Romance",
        "History",
        "Biography",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-Help",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design",
        "Mistery",
        "Programming",
        "Fantasy",
        "Sci-Fi",
        "Thriller",
        "Horror",
        "Comedy",
        "Memoir",
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookscategories[0]);
    const [addbook,setAddbook] = useState({})
    const handleChangeSelectedValue = (event) => {
        // console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }
    // Form submissions
    const handleBookSubmit = async (event) => {
        event.preventDefault();
    console.log(JSON.stringify(addbook) + "addbookaddbookaddbook");
       const res = await addbookstore(addbook)
       if(res.status === "success"){
        alert("Book added successfully")
       }
     
    }
    const handleChangeBook = (event) => {
        setAddbook({...addbook,[event.target.name]: event.target.value})
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={handleBookSubmit} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
                {/* First Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <label htmlFor="bookTitle" value="Book Title">Book Title</label>
                        </div>
                        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required onChange={handleChangeBook} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <label htmlFor="authorName" value="Author Name">Author Name</label>
                        </div>
                        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required onChange={handleChangeBook} />
                    </div>
                </div>

                {/* Second Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <label htmlFor="imageURL" value="Book Image URL">Book Image URL</label>
                        </div>
                        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required onChange={handleChangeBook} />
                    </div>

                    {/* Category Row */}

                    <div className='lg:w-1/2'>
                        <div className='mb-2 block'>
                            <label htmlFor="inputState" value="Book Category">Book Category</label>
                        </div>
                        <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {bookscategories.map((option, index) => <option key={index} value={option}>{option}</option>)}
                        </select>
                    </div>
                </div>

                {/* Third Row Books Description */}
                <div>
                    <div className='mb-2 block'>
                        <label htmlFor="bookDescription" value="Book Description">Book Description</label>
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" type="text" placeholder="Write your book descripton..." required className='w-full' rows={5} />
                </div>
                {/* Books PDF Link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFUrl" value="Book PDF Url" />
                    </div>
                    <TextInput id="bookPDFUrl" name='bookPDFUrl' type="text" placeholder="Book PDF Url" required />
                </div>
                <Button type="submit" className="mt-4">Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBooks;