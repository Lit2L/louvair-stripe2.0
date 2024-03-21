interface ProductsLayout {
  children: React.ReactNode
}

export default function ProductsLayout({ children }: ProductsLayout) {
  return (
    <div>
      <h1>Products</h1>
      {children}
    </div>
  )
}
