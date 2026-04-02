import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getOrders } from "@/data/dashboard-data";

const statusColor: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "outline",
  processing: "secondary",
  shipped: "default",
  delivered: "default",
  cancelled: "destructive",
};

const DashboardOrders = () => {
  const orders = getOrders();

  return (
    <div className="rounded-lg border border-border bg-card overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map(o => (
            <TableRow key={o.id}>
              <TableCell className="font-medium">{o.id}</TableCell>
              <TableCell>{o.customer}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{o.email}</TableCell>
              <TableCell>{o.items}</TableCell>
              <TableCell>₨ {o.total.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={statusColor[o.status] || "secondary"} className="capitalize">{o.status}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">{o.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardOrders;
