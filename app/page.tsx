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
const projects: Project[] = [
  {
    id: 1,
    title: "Speak Up",
    description: "A modern political website that will keep track of politics and political figures",
    difficulty: "Hard",
    challenges: ["Gathering Data",  "Next Auth", "Handling User Data"],
    backendFrontendRatio: 50,
    breakdown: "The aim of this app is to allow everyone to know easily whats going on in local and federal government. Keep track of bills laws and where their tax funds are being spent. Understand what political figures are really doing with that money, what they are voting for and what they actually accomplish in their tenure. With dozens of icebox features. This application will likely be the most profitable of the bunch.",
    monetaryGain: 9
  },
  {
    id: 2,
    title: "Small to Medium Company Software",
    description: "Targetting a specific company demographic build a modular systems technology for lease.",
    difficulty: "Hard",
    challenges: ["Creating Big Brain", "Creating dynamic data transmission", "Creating fully modular pages", "Data integration"],
    backendFrontendRatio: 50,
    breakdown: "This project is one we have experience in, as we've build quite a lot of related technology but we have to be very smart with how we layout the foundation for this software. Whatever its purpose is it has to be valuable enough to go through the process of integrating existing company data into it. And it has to be able to smart enough to integrate existing company data",
    monetaryGain: 6
  },
  {
    id: 3,
    title: "Police License Plate Recognition",
    description: "Create fully secured software that utilizes object detection AI and OCR to grab information to read license plates",
    difficulty: "Medium",
    challenges: ["Optimizing LPR", "Handling Data safely", "Creating a UI"],
    backendFrontendRatio: 75,
    breakdown: "This project is mostly backend because it's mostly using API endpoints to send and receive data, lots of tweaking to determine the optimal LPR and license capture. There will be heavy authentication as this is planned to be sold to the government so data security is a high priority. Most of the work will be on the backend. The styling of the UI is yet to be determined, but if we run Python only, our options are limited and I don't have much experience in tkinter. However, if we can use an HTTPS site, we can do a much better job on the styling, but it has to integrate well with the workflow of officers and the counties we target.",
    monetaryGain: 6
  },
  {
    id: 4,
    title: "Transcribe Application",
    description: "Building an application that listens to audio, and transcribes it using speaker recognition software",
    difficulty: "Medium",
    challenges: ["Finding and utilizing Speaker recognition modules", "Optimizing Speaker recognition", "Creating speaker profiles"],
    backendFrontendRatio: 60,
    breakdown: "The complexity of this project comes from first finding how to run speaker diarization, I tried installing the package Speaker Recognition from Speechbrain, but I couldnt find it, I saw they had some stuff on hugging face so im sure its possible, there is documentation on it but me myself I couldnt get it. From there we need to take the audio and work on determining how to separate speakers, then recognize them again, after this we can create users, take these recognized audios and assign account specific profiles to each speech pitch, then start integrating it with the cloud, create an app for it and launch a beta.",
    monetaryGain: 5
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
  {
    id: 6,
    title: "Youtube to MP3 / MP4",
    description: "A simple mp3 / mp4 converter from a youtube link",
    difficulty: "Very Easy",
    challenges: ["Python libraries", "CORS", "Proerly Creating the mp3 or mp4"],
    backendFrontendRatio: 70,
    breakdown: "Basically an input a button and a toggle of either mp3 or mp4. Sends the url to the backend, the backend grabs the video downloads it and encodes it properly, then prepares a download for the frontend",
    monetaryGain: 3
  },
  {
    id: 7,
    title: "Ennio",
    description: "Basic AI with listening and talking capabilities",
    difficulty: "Very Easy",
    challenges: ["Making it worth using", "Quality of speech", "User specific"],
    backendFrontendRatio: 35,
    breakdown: "The main difficulty from this would be eventually adding functionality to let it do things more than just talking",
    monetaryGain: 2
  },
  {
    id: 8,
    title: "Log In",
    description: "A personal blog for anyone who signs up, mostly a personal checkup log",
    difficulty: "Very Easy",
    challenges: ["Nice UI", "Mobile First", "Organizing Data"],
    backendFrontendRatio: 20,
    breakdown: "The main point of this one is because I have my own blog I post to a lot but want to build a new one so its easier to use.",
    monetaryGain: 1
  },
  {
    id: 9,
    title: "How do I respond to this?",
    description: "Another AI wrapper that helps you respond in the tone you want",
    difficulty: "Very Easy",
    challenges: ["Handling General cases", "Remembering Chats", "UI"],
    backendFrontendRatio: 65,
    breakdown: "Have you ever had to respond to someone using AI because you think you lack to professionalism, or maybe you're just lazy? me too. Anyways this would give the option of selecting what type of message you're responding to, the level of professionalism on a scale from 1-100, maybe types being email, text, snap, idk. And it passes a bunch of context through to the LLM with a regenerate you know the works.",
    monetaryGain: 1
  },
  {
    id: 10,
    title: "Convert this",
    description: "Converts one file type to another",
    difficulty: "Very Easy",
    challenges: ["Handling many different types of files", "Remember a users converts", "Speed of conversion"],
    backendFrontendRatio: 65,
    breakdown: "Essentially everything cloud convert does, they do it very well this wont be much a competition.",
    monetaryGain: 2
  },
  {
    id: 11,
    title: "Super Converter",
    description: "Converting at a directory level",
    difficulty: "Easy",
    challenges: ["Handling many different types of files", "Remember a users converts", "Iterating and Uploading of directories"],
    backendFrontendRatio: 65,
    breakdown: "Everything Cloud Convert does but at a directory level which brings competition to cloud convert and others",
    monetaryGain: 6
  },
  {
    id: 12,
    title: "Subtitle This",
    description: "Upload a video, we add the subtitles",
    difficulty: "Medium",
    challenges: ["How to upload mp4s / mkvs", "Language transcription", "Adding text over the video where transcription", "re-rendering with text"],
    backendFrontendRatio: 85,
    breakdown: "Used mostly for those tiktokers who would upload a video like familiy guy or top 10 speed clips or whatever and just want english subtitles for viewer retension",
    monetaryGain: 6
  },
  {
    id: 13,
    title: "Luffy.to",
    description: "Anime Streaming Service",
    difficulty: "Hard",
    challenges: ["Large scale video hosting", "Not getting a cease and desist", "Finding the source of videos", "CLean UI"],
    backendFrontendRatio: 70,
    breakdown: "I've always wanted to build a large scale video streaming service for free, ideally anime because its awesome, ive seen a lot of services and I want to make one, warning, may be illegal.",
    monetaryGain: 6
  },
];
type Project = {
  id: number
  title: string
  description: string
  difficulty: "Very Easy" | "Easy" | "Medium" | "Hard"
  challenges: string[]
  backendFrontendRatio: number
  breakdown: string
  monetaryGain: number
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

  const getBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Very Easy":
        return "bg-sky-200 text-sky-800"
      case "Easy":
        return "bg-green-200 text-green-800"
      case "Medium":
        return "bg-yellow-200 text-yellow-800"
      case "Hard":
        return "bg-red-200 text-red-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <Badge 
            className={`${getBadgeVariant(project.difficulty)}`}
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
            <h4 className="text-sm font-medium mb-2">Frontend to Backend Ratio:</h4>
            <Slider
              defaultValue={[project.backendFrontendRatio]}
              max={100}
              step={1}
              className="w-full"
              disabled
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span> </span>
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
const difficultyOrder = {
  "Hard": 0,
  "Medium": 1,
  "Easy": 2,
  "Very Easy": 3
};

function ProjectDashboard() {
  const sortedProjects = [...projects].sort((a, b) => 
    difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Project Ideas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectDashboard;