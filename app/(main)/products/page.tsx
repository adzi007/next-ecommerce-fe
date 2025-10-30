import { ProductList } from "./components/product-list";
import SidebarFilter from "./components/SidebarFilter";
import Toolbar from "./components/Toolbar";

export default function Page() {

  return (
    <div className="lg:w-3/5 w-full mx-auto lg:px-4 px-2 py-10">

      <div className="flex gap-4">

        {/* Sidebar Filter (desktop only) */}
        <aside className="hidden lg:block w-xs">
          <SidebarFilter />
        </aside>

        {/* Product Content */}
        <main className="w-full">
          <Toolbar />
          <ProductList />
        </main>
      </div>
    </div>
  );
}
    
