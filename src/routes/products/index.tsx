import { ProductList, ProductListView, ProductListEmptyView, ProductListContent, ProductSearch } from "~/components/ui/product"
import { Product, ProductImage, ProductName, ProductPrice, ProductStockBadge, ProductToggleWishlistTrigger, ProductAddToCartTrigger } from "~/components/ui/product"
import { Search, SearchControl, SearchInput, SearchContent, SearchListbox, SearchItem, SearchNoResult } from "~/components/ui/search"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

function ProductCard() {
  return (
    <Product href="/products" class="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200">
      <div class="relative overflow-hidden bg-slate-100">
        <ProductImage class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ProductToggleWishlistTrigger class="p-2 bg-white rounded-full shadow-md hover:text-cyan-600" />
        </div>
        <div class="absolute bottom-3 left-3">
          <ProductStockBadge class="text-xs bg-cyan-500 text-white" />
        </div>
      </div>
      <div class="p-4">
        <ProductName class="font-medium text-slate-800 line-clamp-2 min-h-[2.5rem]" />
        <div class="flex items-baseline gap-2 mt-3">
          <ProductPrice class="text-lg font-bold text-cyan-600" />
        </div>
        <div class="mt-4">
          <ProductAddToCartTrigger class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded" />
        </div>
      </div>
    </Product>
  )
}

function SearchSection() {
  return (
    <div class="mb-10">
      <ProductSearch
        class="w-full md:w-96"
        itemComponent={
          <SearchItem>
            <Product href="/products">
              <Flex class="items-center gap-3">
                <ProductImage class="w-12 h-12 object-cover rounded" />
                <div>
                  <ProductName class="font-medium" />
                  <ProductPrice class="text-sm text-muted-foreground" />
                </div>
              </Flex>
            </Product>
          </SearchItem>
        }
      >
        <SearchControl>
          <SearchInput placeholder="Search electronics..." />
        </SearchControl>
        <SearchContent>
          <SearchListbox />
          <SearchNoResult class="px-4 py-2 text-sm text-muted-foreground">
            No electronics found
          </SearchNoResult>
        </SearchContent>
      </ProductSearch>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div class="bg-slate-50 min-h-screen">
      <div class="container mx-auto px-4 py-6">
        <Flex class="flex-col items-center mb-10">
          <Text variant="h5" class="text-3xl font-bold">Our Collection</Text>
          <Text class="text-slate-500 mt-2">Latest tech and gadgets</Text>
        </Flex>
        
        <SearchSection />
        
        <ProductList>
          <ProductListEmptyView />
          <ProductListContent>
            <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
              <ProductListView>
                <ProductCard />
              </ProductListView>
            </Grid>
          </ProductListContent>
        </ProductList>
      </div>
    </div>
  )
}
