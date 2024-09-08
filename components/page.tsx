"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { ChevronRight } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  challenges: string[]
  backendFrontendRatio: number
  breakdown: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Todo App with Real-time Sync",
    description: "Create a todo app that syncs in real-time across devices",
    difficulty: "Medium",
    challenges: ["Implementing real-time database", "Handling offline mode", "User authentication"],
    backendFrontendRatio: 60,
    breakdown: "This project involves creating a backend API with WebSocket support for real-time updates, implementing a responsive frontend, and handling data synchronization between devices. You'll need to consider offline capabilities and conflict resolution when syncing data."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Build a full-featured e-commerce website with product listings, cart, and checkout",
    difficulty: "Hard",
    challenges: ["Payment integration", "Inventory management", "Order processing"],
    backendFrontendRatio: 70,
    breakdown: "This complex project requires a robust backend for managing products, orders, and user accounts. You'll need to integrate with payment gateways, implement a shopping cart system, and create an intuitive product browsing and search functionality. Consider adding features like user reviews, wishlists, and order tracking."
  },
  {
    id: 3,
    title: "GASD",
    description: "Create a weather dashboard that displays current conditions and forecasts",
    difficulty: "Easy",
    challenges: ["API integration", "Data visualization", "Geolocation"],
    backendFrontendRatio: 30,
    breakdown: "This frontend-heavy project focuses on integrating with a weather API and presenting the data in an engaging way. You'll need to handle user location input, possibly using geolocation, and create visually appealing charts or graphics to display weather information. Consider adding features like saving favorite locations or weather alerts."
  }
]

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <Badge 
            variant={
              project.difficulty === "Easy" 
                ? "easy" 
                : project.difficulty === "Medium" 
                  ? "default" 
                  : "destructive"
            }
          >
            {project.difficulty}
          </Badge>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Specific Challenges:</h4>
            <ul className="list-disc pl-5 text-sm">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Backend vs Frontend:</h4>
            <Slider
              defaultValue={[project.backendFrontendRatio]}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Frontend</span>
              <span>Backend</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Breakdown
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{project.title} Breakdown</DialogTitle>
              <DialogDescription>{project.breakdown}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Project Ideas Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}