import React from 'react'
import Header from '../components/Header'
import Footer from '@/component/Footer'
import ShinyText from '@/components/ShinyText'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"



function Profile() {
  return (
    <div>
        <Header/>
       
            <div className="w-full flex justify-center h-auto py-12 mt-20">

                <img
                    src="https://i.pinimg.com/736x/fc/b8/f7/fcb8f7c246d81ad733ecb907dd52a344.jpg" alt="img" className="w-[93%] h-100 object-cover object-top" />

            </div>
                 <div style={{ fontFamily: "Playfair Display, serif" }} className='text-center mt-1 mb-8  text-5xl font-semibold ' >
                <div>
                    <ShinyText
                        text="MIRO"
                        speed={3}
                        className='custom-class'
                    />
                </div>

            </div>
    
      {/*  Profile + Orders Cards Section */}
      <div  style={{ fontFamily: 'Raleway, sans-serif' }}  className="w-full flex justify-center ">
        <div className="w-[93%] grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* My Profile Card */}
          <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My Profile</h2>
            <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p>
{/* 
            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Edit My Profile
            </button> */}
     



  <Sheet    >
      <SheetTrigger  className="w-full py-2 text-sm border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
        Edit My Profile
      </SheetTrigger>

      <SheetContent side="right" style={{ fontFamily: 'Raleway, sans-serif' }} className="z-9999">
        <SheetHeader>
          <SheetTitle>EDIT PROFILE</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-5 p-5">
          <div className="space-y-2">
            <Label>Username</Label>
            <Input placeholder="Enter username" />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter new password" />
          </div>

          <div className="space-y-2">
            <Label>Confirm password</Label>
            <Input type="password" placeholder="Confirm password" />
          </div>
        </div>

        <div className="mt-8 p-5">
          <Button type="submit" className="w-full border border-black hover:bg-white hover:text-black">Save changes</Button>

          <SheetClose asChild>
            <Button variant="outline" className="w-full mt-2 border-black">
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>


            {/* <ProfileEdit/> */}
          </div>

          {/* My store Card */}
            <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My store</h2>
            <p className="mb-9 text-[13px]">Store: miro</p>

            {/* <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Edit My Store
            </button> */}
            <Sheet>
  <SheetTrigger className="w-full py-2 text-sm border border-black bg-white text-black hover:bg-black hover:text-white transition">
    Add Store
  </SheetTrigger>

  <SheetContent side="bottom" className="z-9999 max-h-[92vh] overflow-y-auto rounded-t-2xl" style={{ fontFamily: "Raleway, sans-serif" }}>
    <SheetHeader>
      <SheetTitle className="tracking-wide">ADD STORE DETAILS</SheetTitle>
      <SheetDescription>
        Fill the details carefully before creating your store.
      </SheetDescription>
    </SheetHeader>

    {/* form */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-4 pb-6">

      {/* Store Name */}
      <div className="space-y-1">
        <Label>Store Name</Label>
        <Input placeholder="Ex: The Vintage Wardrobe" />
      </div>

      {/* Store Tagline */}
      <div className="space-y-1">
        <Label>Store Tagline</Label>
        <Input placeholder="Ex: Curated Preloved Fits" />
      </div>

      {/* Store Details */}
      <div className="space-y-1 md:col-span-2">
        <Label>Store Details</Label>
        <Input placeholder="Ex: Streetwear · Y2K · Oversized · Vintage Denim" />
      </div>

      {/* Store Description */}
      <div className="space-y-1 md:col-span-2">
        <Label>Store Description</Label>
        <textarea className="w-full border rounded-md px-3 py-2 min-h-90px outline-none" placeholder="Describe your store vibe, curation style, delivery, etc..." />
      </div>

      {/* Upload Images - 4 */}
      <div className="space-y-1 md:col-span-2">
        <Label>Upload Images (Max 4)</Label>

        <label className="border-dashed border-2 border-gray-400 rounded-2xl h-40 flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition">
          <Upload className="mb-2" />
          <span className="text-sm">Click to upload store images</span>
          <input type="file" className="hidden" multiple accept="image/*" />
        </label>

        <p className="text-xs text-gray-500 mt-1">You can upload up to 4 images</p>
      </div>
    </div>

    {/* buttons */}
    <div className="px-2 md:px-4 pb-8 space-y-3">
      <Button className="w-full bg-black text-white hover:opacity-80">
        Add Store
      </Button>

      <SheetClose asChild>
        <Button variant="outline" className="w-full border-black">
          Cancel
        </Button>
      </SheetClose>
    </div>
  </SheetContent>
</Sheet>

          </div> 
          {/* my cart */}
           {/* <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My cart</h2>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              View My Cart
            </button>
          </div> */}
          {/* my wishlist */}
            {/* <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My wishlist</h2>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              View My Wishlist
            </button>
          </div> */}
             {/* sell cloth */}
           <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">Add Cloth</h2>
            {/* <p className="mb-9 text-[13px]">Add cloth details</p> */}

            {/* <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Add Cloth
            </button> */}
            {/* for add cloth */}
   <Sheet>
      <SheetTrigger className="w-full py-2 text-sm border border-black bg-white text-black hover:bg-black hover:text-white transition">
        Add Cloth
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="z-9999 max-h-[92vh] overflow-y-auto rounded-t-2xl"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <SheetHeader>
          <SheetTitle className="tracking-wide">ADD NEW CLOTH</SheetTitle>
          <SheetDescription>
            Fill the details carefully before listing your product.
          </SheetDescription>
        </SheetHeader>

        {/* form content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-4 pb-6">

          {/* Cloth Name */}
          <div className="space-y-1">
            <Label>Cloth Name</Label>
            <Input placeholder="Ex: Oversized T-Shirt" />
          </div>

          {/* Price */}
          <div className="space-y-1">
            <Label>Price</Label>
            <Input type="number" placeholder="Ex: 1299" />
          </div>

          {/* Cloth Color */}
          <div className="space-y-1">
            <Label>Cloth Color</Label>
            <Input placeholder="Ex: Beige" />
          </div>

          {/* Product ID */}
          <div className="space-y-1">
            <Label>Product ID</Label>
            <Input placeholder="Auto / Manual Id" />
          </div>

          {/* Cloth Details */}
          <div className="space-y-1 md:col-span-2">
            <Label>Cloth Details</Label>
            <Input placeholder="Slim fit, round neck, regular length" />
          </div>

          {/* Cloth Description */}
          <div className="space-y-1 md:col-span-2">
            <Label>Cloth Description</Label>
            <textarea
              className="w-full border rounded-md px-3 py-2 min-h-90px outline-none"
              placeholder="100% cotton, soft touch fabric…"
            />
          </div>

          {/* Size */}
          <div className="space-y-1">
            <Label>Size</Label>
            <Input placeholder="S / M / L / XL" />
          </div>

          {/* Main Fabric */}
          <div className="space-y-1">
            <Label>Main Fabric</Label>
            <Input placeholder="Cotton / Denim / Polyester" />
          </div>

          {/* Secondary Fabric */}
          <div className="space-y-1">
            <Label>Secondary Fabric</Label>
            <Input placeholder="Optional" />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <Label>Gender</Label>
            <Input placeholder="Men / Women" />
          </div>

              {/* Category */}
          <div className="space-y-1">
            <Label>Category</Label>
            <Input placeholder="Tops / Jeans / Jackets / Dresses" />
          </div>

          {/* Seller Mail */}
          <div className="space-y-1">
            <Label>Seller Email</Label>
            <Input type="email" placeholder="seller@email.com" />
          </div>

          {/* Status */}
          <div className="space-y-1">
            <Label>Status</Label>
            <Input placeholder="Available / Sold" />
          </div>

          {/* Buyer Mail */}
          <div className="space-y-1">
            <Label>Buyer Email</Label>
            <Input type="email" placeholder="Optional until sold" />
          </div>

          {/* Upload Images */}
          <div className="space-y-1 md:col-span-2">
            <Label>Upload Images</Label>

            <label className="border-dashed border-2 border-gray-400 rounded-2xl h-40 flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition">
              <Upload className="mb-2" />
              <span className="text-sm">Click to upload images</span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
        </div>

        {/* buttons */}
        <div className="px-2 md:px-4 pb-8 space-y-3">
          <Button className="w-full bg-black text-white hover:opacity-80">
            Add Product
          </Button>

          <SheetClose asChild>
            <Button variant="outline" className="w-full border-black">
              Cancel
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
          </div>
          {/* cloth status */}
            <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">cloth status</h2>
            {/* <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p> */}

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Check Status
            </button>
          </div>
             {/* my order */}
           <div className="bg-white border  p-8  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
            <h2 className="text-1xl font-semibold  mb-6 uppercase">My order</h2>
            <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p>

            <button className="w-full py-2 text-sm  border border-black bg-white text-black hover:bg-black hover:text-white hover:opacity-80 transition">
              Start Shopping
            </button>
          </div>
          {/* my wishlist */}
            <div className="bg-white   p-8  transition-all ">
            {/* <h2 className="text-1xl font-semibold  mb-6 uppercase">My wishlist</h2> */}
            {/* <p className="mb-9 text-[13px]">Login: amgithshaji410@gmail.com</p> */}

            <button className="w-50 py-2 text-sm md:ms-116 ms-13  border border-black bg-black text-white hover:bg-white hover:text-black hover:opacity-80 transition">
              Log Out
            </button>
          </div>

        </div>
                </div>

        <Footer/>
    </div>
  )
}

export default Profile