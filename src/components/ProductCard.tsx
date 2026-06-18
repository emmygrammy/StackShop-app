import { Card,CardHeader,CardFooter,CardContent,  } from '#/components/ui/card'

import { Star } from 'lucide-react'
import { Button } from '#/components/ui/button'

export default function ProductCard() {
  return (
    <Card className="w-[280px] overflow-hidden transition hover:shadow-lg">
      
      {/* IMAGE */}
      <div className="h-[180px] w-full bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Nike Shoe"
          className="h-full w-full object-cover"
        />
      </div>

      {/* HEADER */}
      <CardHeader className="space-y-1">
        <h2 className="text-lg font-semibold">Nike Air Max</h2>

        <p className="text-sm text-muted-foreground">
          Lightweight running shoes for comfort and speed
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} />
          <Star size={16} />
          <span className="ml-2 text-xs text-muted-foreground">
            (4.2)
          </span>
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm line-through text-muted-foreground">
            $180
          </p>
          <p className="text-lg font-bold text-green-600">
            $420
          </p>
        </div>

        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
          -33%
        </span>
      </CardContent>

      {/* FOOTER */}
      <CardFooter>
        <Button className="w-full">
          Add to Cart
        </Button>
      </CardFooter>

    </Card>
  )
}