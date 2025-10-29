// import { getProducts } from "./actions";
import { ProductList } from "./components/product-list";
import { dummyProducts } from "@/data/products";
import ProductSidebar from "./components/ProductSidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LuFilter } from "react-icons/lu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ModalFilter from "./components/ModalFilter";

export default async function Page() {
  // const products = await getProducts();
  const products = dummyProducts.data;

  return (
    <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-2 py-10">
      {/* <h1 className="text-3xl font-bold mb-8">Products</h1> */}

      <div className="flex gap-4">

        <div className="w-xs lg:block hidden">
          <div className="space-y-1 mb-4">
          <h4 className="text-lg leading-none font-medium">Filter</h4>

          </div>
          <ProductSidebar />
        </div>

        <div className="w-full">
          <div className="w-full mb-4">
              <div className="space-y-1 flex items-center justify-between">
                <h4 className="text-lg leading-none font-medium">All Products</h4>

                  {/* <Button variant="outline" className="lg:hidden block">
                    <LuFilter />
                  </Button> */}
                  <ModalFilter />

                  {/* <Dialog>
                    <DialogTrigger className="lg:hidden block p-2 rounded-sm bg-white border"><LuFilter size={20} /></DialogTrigger>
                    <DialogContent className="fixed h-screen w-full max-w-full flex flex-col bg-white rounded-none">
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog> */}

              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
               <p>Showing 10 - 125 from total of all products</p>
              </div>
          </div>

          <ProductList products={products} />

        </div>
      </div>
    </div>
  );
}
    
