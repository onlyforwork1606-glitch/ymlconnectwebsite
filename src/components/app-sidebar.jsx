import * as React from "react"
import Logo from "../assets/images/Logo.jpg"
import Reset from "../assets/images/Reset.svg"
import { Minus, Plus } from "lucide-react"
import { useFilters } from "@/context/FilterContext"
import { Checkbox } from "@/components/ui/checkbox"
import { SearchForm } from "@/components/search-form"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Product Type",
      items: ["Jeans", "Shirt", "Shoes", "Watches", "Nightwear", "Jumpsuite", "Shorts"]
        .map(title => ({ title, withCheckbox: true })),
    },
    {
      title: "Gender",
      items: ["Men", "Women", "Kids" ,"Girls" ,"Boys"]
        .map(title => ({ title, withCheckbox: true })),
    },
    {
      title: "Sizes",
      items: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"]
        .map(title => ({ title, withCheckbox: true })),
    },
    {
      title: "Price Range",
      items: [{ isSlider: true }],
    },
    {
      title: "Brands",
      items: [
        "Adiddas",
        "George Armani",
        "Armani Exchange",
        "Polo Ralph Lauren",
        "Nike",
        "Puma",
        "Reebok",
        "Under Armour",
      ].map(title => ({ title, withCheckbox: true })),
    },
    {
      title: "Colours",
      items: [
        { title: "Black", color: "#000" },
        { title: "White", color: "#fff" },
        { title: "Red", color: "#ef4444" },
        { title: "Blue", color: "#3b82f6" },
        { title: "Green", color: "#22c55e" },
        { title: "Yellow", color: "#eab308" },
        { title: "Purple", color: "#a855f7" },
        { title: "Orange", color: "#f97316" },
        { title: "Pink", color: "#ec4899" },
      ],
    },
  ],
}

export function AppSidebar(props) {
  const { filters, toggleFilter, priceRange, setPriceRange, resetFilters } = useFilters()

  const getKey = (group) => {
    switch (group) {
      case "Product Type":
        return "productType"
      case "Sizes":
        return "sizes"
      case "Brands":
        return "brands"
      case "Colours":
        return "colors"
      case "Gender":
        return "gender"
      default:
        return null
    }
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex size-8 items-center justify-center rounded-lg">
                  <img src={Logo} alt="Logo" className="size-9" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Funky Fabrics</span>
                  <span>v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
        <Button onClick={resetFilters} variant="outline" className="w-full mt-2">
         <img src={Reset} alt="Reset" className="size-5 transform -scale-x-100" />   Reset Filters
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((group, index) => (
              <Collapsible
                key={group.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {group.title}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {group.items.map((item, i) => (
                        <SidebarMenuSubItem key={i}>
                          <SidebarMenuSubButton asChild className={item.isSlider ? "h-auto" : ""}>
                            <div className="flex items-center gap-2 w-full">
                              {item.withCheckbox && (
                                <Checkbox
                                  checked={
                                    !!filters[getKey(group.title)]?.includes(item.title)
                                  }
                                  onCheckedChange={() =>
                                    toggleFilter(getKey(group.title), item.title)
                                  }
                                />
                              )}
                              {item.gender && (
                                <Checkbox
                                  checked={!!filters.gender?.includes(item.title)}
                                  onCheckedChange={() =>
                                    toggleFilter("gender", item.title)
                                  }
                                />
                              )}
                              {item.color && (
                                <Checkbox
                                  style={{ backgroundColor: item.color }}
                                  checked={!!filters.colors?.includes(item.title)}
                                  onCheckedChange={() =>
                                    toggleFilter("colors", item.title)
                                  }
                                />
                              )}

                              {item.isSlider ? (
                                <div className="w-full flex flex-col gap-2">
                                  <span className="ml-5 font-bold text-lg">
                                    {priceRange[0]}$ - {priceRange[1]}$
                                  </span>
                                  <Slider
                                    value={priceRange}
                                    onValueChange={setPriceRange}
                                    min={50}
                                    max={5000}
                                    step={50}
                                  />
                                </div>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </div>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
