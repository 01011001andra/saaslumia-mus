import { ArrowRight, Code, MessageSquare, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
               </div>
               <span className="text-2xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="max-w-md text-white/50 text-lg leading-relaxed mb-8">
               Lumina is the world&apos;s most advanced productivity platform, 
               empowering teams to achieve more with AI-driven insights 
               and high-performance workspace tools.
            </p>
            <div className="flex items-center gap-4">
               {[Code, MessageSquare, Globe].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                     <Icon className="w-5 h-5" />
                  </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-white/50 font-medium">
               <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
               <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-white/50 font-medium">
               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/30 text-sm font-medium">
            <p>© 2026 Lumina Productivity Tools, Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
               <a href="#" className="hover:text-white transition-colors">Status</a>
               <a href="#" className="hover:text-white transition-colors">Contact</a>
               <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                  Global English <ArrowRight className="w-3 h-3" />
               </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
