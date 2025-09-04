import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { currencyFormatter } from "@/lib/currency-formatter";
import { useProducts } from "@/shop/hooks/useProducts";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  const { data } = useProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aqui puedes ver y administrar tus productos"
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link to="../../admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">ID</TableHead> */}
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.products.map(product => (
            <TableRow key={product.id}>
              {/* <TableCell className="font-medium">{product.id}</TableCell> */}
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="size-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`../../admin/products/${product.id}`}
                  className="hover:text-blue-500 underline "
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormatter(product.price)}</TableCell>
              <TableCell>{product.tags}</TableCell>
              <TableCell>{product.stock} stock</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell className="text-right">
                <Link to={`../../admin/products/${product.id}`}>
                  <PencilIcon className="size-4 text-blue-500 " />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
