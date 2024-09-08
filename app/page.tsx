'use client'
import React from "react"
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
import { ChevronRight, CheckCircle2, DollarSign } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  challenges: string[]
  backendFrontendRatio: number
  breakdown: string
  monetaryGain: number // New field: 1-5 representing the number of dollar signs
}

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const renderMonetaryGain = () => {
    const fullDollars = Math.floor(project.monetaryGain);
    const hasHalfDollar = project.monetaryGain % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {[...Array(fullDollars)].map((_, index) => (
          <DollarSign key={index} className="w-5 h-5 text-green-500" />
        ))}
        {hasHalfDollar && (
          <DollarSign key="half" className="w-5 h-5 text-green-500 opacity-50" />
        )}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
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
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Frontend vs Backend:</h4>
            <Slider
              defaultValue={[project.backendFrontendRatio]}
              max={100}
              step={1}
              className="w-full"
              disabled
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Frontend</span>
              <span>Backend</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Monetary Gain Potential In Figures:</h4>
            {renderMonetaryGain()}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Breakdown
              <ChevronRight className="w-4 h-5 ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
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


const projects: Project[] = [
  {
    id: 1,
    title: "Police License Plate Recognition",
    description: "Create fully secured software that utilizes object detection AI and OCR to grab information to read license plates",
    difficulty: "Medium",
    challenges: ["Optimizing LPR", "Handling Data safely", "Creating a UI"],
    backendFrontendRatio: 75,
    breakdown: "This project is mostly backend because it's mostly using API endpoints to send and receive data, lots of tweaking to determine the optimal LPR and license capture. There will be heavy authentication as this is planned to be sold to the government so data security is a high priority. Most of the work will be on the backend. The styling of the UI is yet to be determined, but if we run Python only, our options are limited and I don't have much experience in tkinter. However, if we can use an HTTPS site, we can do a much better job on the styling, but it has to integrate well with the workflow of officers and the counties we target.",
    monetaryGain: 6
  },
  {
    id: 2,
    title: "Transcribe Application",
    description: "Building an application that listens to audio, and transcribes it using speaker recognition software",
    difficulty: "Medium",
    challenges: ["Finding and utilizing Speaker recognition modules", "Optimizing Speaker recognition", "Creating speaker profiles"],
    backendFrontendRatio: 60,
    breakdown: "The complexity of this project comes from first finding how to run speaker diarization, I tried installing the package Speaker Recognition from Speechbrain, but I couldnt find it, I saw they had some stuff on hugging face so im sure its possible, there is documentation on it but me myself I couldnt get it. From there we need to take the audio and work on determining how to separate speakers, then recognize them again, after this we can create users, take these recognized audios and assign account specific profiles to each speech pitch, then start integrating it with the cloud, create an app for it and launch a beta.",
    monetaryGain: 5
  },
  {
    id: 3,
    title: "Speak Up",
    description: "A modern political website that will keep track of politics and political figures",
    difficulty: "Hard",
    challenges: ["Gathering Data",  "Next Auth", "Handling User Data"],
    backendFrontendRatio: 50,
    breakdown: "The aim of this app is to allow everyone to know easily whats going on in local and federal government. Keep track of bills laws and where their tax funds are being spent. Understand what political figures are really doing with that money, what they are voting for and what they actually accomplish in their tenure. With dozens of icebox features. This application will likely be the most profitable of the bunch.",
    monetaryGain: 9
  },
  {
    id: 4,
    title: "Small to Medium Company Software",
    description: "Targetting a specific company demographic build a modular systems technology for lease.",
    difficulty: "Hard",
    challenges: ["Creating Big Brain", "Creating dynamic data transmission", "Creating fully modular pages", "Data integration"],
    backendFrontendRatio: 50,
    breakdown: "This project is one we have experience in, as we've build quite a lot of related technology but we have to be very smart with how we layout the foundation for this software. Whatever its purpose is it has to be valuable enough to go through the process of integrating existing company data into it. And it has to be able to smart enough to integrate existing company data",
    monetaryGain: 6
  },
  {
    id: 5,
    title: "Studdy Buddy",
    description: "A software that uses AI and advanced front end to gameify learning anything",
    difficulty: "Easy",
    challenges: ["File upload and text extraction", "Dynamic page generation based on AI Response", "Keeping the focus away from cheating and on learning"],
    backendFrontendRatio: 35,
    breakdown: "The endgoal of this project is to have a place where people who have learning delays or dont learn as quickly as others, or just lazy. Can come and upload their homework, the text extraction will happen, and it will be fed to the AI, the ai can then understand the context of the homework, and create another problem much like the ones being asked, so will be gameified with dynamic page generation to help you learn HOW to solve the problem, not the solution of the problem by simplifying the learning process.",
    monetaryGain: 5
  },
]



export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Project Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}