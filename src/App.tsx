import { CustomButton } from './components/ui'
import './styles/globals.css'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-foreground">Component Library Demo</h1>
        
        {/* Button Examples */}
        {/* <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div> */}

        {/* Input Examples */}
        {/* <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            <Input placeholder="Enter your name" />
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </div> */}

	<CustomButton variant="outline" color="gray">Outline</CustomButton>

        
      </div>
    </div>
  )
}

export default App