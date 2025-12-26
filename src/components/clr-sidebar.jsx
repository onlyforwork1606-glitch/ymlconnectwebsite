import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import Logo from "../assets/images/Logo.jpg"
import { Checkbox } from "@/components/ui/checkbox"
import { SearchForm } from "@/components/search-form"
import { Slider } from "@/components/ui/slider"
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
      items: [
        "Jeans",
        "Shirt",
        "Shoes in Clearance Sale",
        "Watches",
        "Nightwear",
        "Jumpsuit",
        "Shorts",
      ].map((t) => ({ title: t, withCheckbox: true })),
    },
    {
      title: "Sale",
      items: [{ isDiscount: true }],
    },
    {
      title: "Sizes",
      items: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((s) => ({
        title: s,
        withCheckbox: true,
      })),
    },
    {
      title: "Price Range",
      items: [{ isSlider: true }],
    },
    {
      title: "Brands",
      items: [
        "Adidas",
        "Giorgio Armani",
        "Armani Exchange",
        "Polo Ralph Lauren",
        "Nike",
        "Puma",
        "Reebok",
        "Under Armour",
      ].map((b) => ({ title: b, withCheckbox: true })),
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

export function ClrSidebar(props) {
  const [price, setPrice] = useState([50, 5000])
  const [discount, setDiscount] = useState([10])

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary">
                  <img src={Logo} alt="Logo" className="size-9" />
                </div>
                <div className="ml-2 flex flex-col leading-none">
                  <span className="font-medium">Funky Fabrics</span>
                  <span className="text-xs">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((section, index) => (
              <Collapsible
                key={section.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {section.title}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item, i) => (
                        <SidebarMenuSubItem key={i}>
                          <SidebarMenuSubButton className="h-auto">
                            <div className="flex w-full items-center gap-2">
                              {item.withCheckbox && <Checkbox />}

                              {item.color && (
                                <span
                                  className="h-4 w-4 rounded-full border"
                                  style={{ backgroundColor: item.color }}
                                />
                              )}
                             
                              {item.isDiscount && (
                                <div className="w-full h-12">
                                    <span className="text-sm font-semibold">{discount} % Off</span>
                                <Slider className="mt-3"
                                  value={discount}
                                  onValueChange={setDiscount}
                                  min={10}
                                  max={98}
                                  step={2}
                                />
                                </div>
                              )}

                              {item.isSlider ? (
                                <div className="w-full">
                                  <span className="text-sm font-semibold">
                                    ${price[0]} – ${price[1]}
                                  </span>
                                  <Slider
                                    value={price}
                                    onValueChange={setPrice}
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
