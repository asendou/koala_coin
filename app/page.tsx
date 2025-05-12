import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart } from "@/components/ui/chart"
import {
  DiscIcon as Discord,
  TextIcon as Telegram,
  Twitter,
  ArrowRight,
  ExternalLink,
  Wallet,
  DollarSign,
  Repeat,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder-logo.jpg"
              alt="Koala Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-purple-800">Koala Coin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-purple-800 hover:text-purple-600">
              About
            </Link>
            <Link href="#tokenomics" className="text-sm font-medium text-purple-800 hover:text-purple-600">
              Tokenomics
            </Link>
            <Link href="#how-to-buy" className="text-sm font-medium text-purple-800 hover:text-purple-600">
              How to Buy
            </Link>
            <Link href="#community" className="text-sm font-medium text-purple-800 hover:text-purple-600">
              Community
            </Link>
            <Link href="#roadmap" className="text-sm font-medium text-purple-800 hover:text-purple-600">
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600">Buy Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 -z-10 h-full w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square rounded-full bg-gradient-to-r from-pink-200/50 via-purple-200/50 to-blue-200/50 blur-3xl"></div>
            </div>
            <div className="mb-8 animate-bounce">
              <Image
                src="/placeholder-logo.jpg"
                alt="Koala Mascot"
                width={200}
                height={200}
                className="rounded-full border-4 border-purple-300 shadow-lg"
              />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-purple-800">
              Koala — Cute. Cuddly. Chaotic. Built on Solana.
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-purple-700">👑 Meet $KOALA – the iconic meme coin.
              Community-driven. NFT-powered..</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://jup.ag/swap/SOL-<soon>" className="bg-purple-500 flex gap-x-3 px-3 p-2 justify-center items-center text-white rounded-md hover:bg-purple-600 text-lg">
                Buy Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="https://t.me/koalauniverse" className="border p-2 rounded-md border-purple-500 text-purple-500 text-lg">
                Join the Community
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-purple-800">About Koala Coin</h2>
                <p className="text-lg mb-4 text-purple-700">
                  Koala Coin isn't just another memecoin – it's a cuddly revolution in the crypto space! Born from the
                  collective love for these adorable marsupials, our community-driven token brings together cuteness and
                  chaos in perfect harmony.
                </p>
                <p className="text-lg mb-4 text-purple-700">
                  Legend has it that Kenny the Koala, our mascot, fell asleep during a crypto conference (as koalas do,
                  sleeping 20 hours a day) and dreamed of a world where crypto was fun, accessible, and full of
                  eucalyptus. When he woke up, Koala Coin was born!
                </p>
                <p className="text-lg text-purple-700">
                  With Koala Coin, we're building more than just a token – we're creating a community of dreamers,
                  believers, and meme enthusiasts who know that sometimes the cutest ideas make the biggest impact.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-75 blur"></div>
                  <div className="relative rounded-lg bg-white p-6">
                    <Image
                      src="/placeholder-logo.jpg"
                      alt="Koala Story"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-16 bg-purple-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Tokenomics</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 h-[400px] flex items-center justify-center">
                <PieChart
                  data={[
                    { name: "Community", value: 91, color: "#60a5fa" },
                    { name: "Marketing & Collabs", value: 3, color: "#ff00ff" },
                    { name: "Web3 Development", value: 3, color: "#f472b6" },
                    { name: "Team", value: 3, color: "#a78bfa" }, 
                  ]}
                />
              </div>
              <div className="md:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-purple-400"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-800">Community (91%)</h3>
                      <p className="text-sm text-purple-600">Reserved for community initiatives. The community is the heart of this project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-800">Marketing and Collabs</h3>
                      <p className="text-sm text-purple-600">Used for promotional campaigns, partnerships, influencer collaborations, giveaways, and expanding project visibility globally.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-800">Web3 Development</h3>
                      <p className="text-sm text-purple-600">      Allocated for building smart contracts, dApps, infrastructure, audits, and long-term technical innovation that supports the Web3 ecosystem.                      .
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-pink-400"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-800">Team (3%)</h3>
                      <p className="text-sm text-purple-600">Incentives for the development and management team. This portion is typically locked and released gradually (vesting schedule).
                      </p>
                    </div>
                  </div>
                 
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                  <h3 className="font-medium text-purple-800 mb-2">Token Details</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-purple-600">Total Supply:</div>
                    <div className="font-medium">1,000,000,000 KOALA</div>
                    <div className="text-purple-600">Network:</div>
                    <div className="font-medium">Solana</div>
                    <div className="text-purple-600">Tax:</div>
                    <div className="font-medium">0% Buy / 0% Sell</div>
                  </div>
                </div>
              
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">How to Buy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden border-purple-200">
                <div className="bg-purple-100 p-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                    <Wallet className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-800">Step 1: Create a Wallet</h3>
                  <p className="text-purple-700 mb-4">
                    Download and set up Phantom or another Solana wallet of your choice.
                  </p> 
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-200">
                <div className="bg-purple-100 p-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-800">Step 2: Get Some SOL</h3>
                  <p className="text-purple-700 mb-4">
                    Purchase Solana from an exchange and transfer it to your wallet.
                  </p> 
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-200">
                <div className="bg-purple-100 p-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center">
                    <Repeat className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-800">Step 3: Swap on a DEX</h3>
                  <p className="text-purple-700 mb-4">
                    Connect your wallet to Phantom or another DEX and swap SOL for $KOALA.
                  </p> 
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-purple-100 rounded-lg text-center">
              <p className="text-purple-800">
                Contract Address: <span className="font-mono bg-white px-2 py-1 rounded text-sm">coming soon</span>
                <Button variant="ghost" size="sm" className="ml-2 text-purple-700">
                  <span className="sr-only">Copy</span>
                  Copy
                </Button>
              </p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-16 bg-purple-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Join the Koala Community</h2>
            <p className="text-lg text-center mb-8 max-w-2xl mx-auto text-purple-700">
              Become part of our growing family of Koala enthusiasts! Share memes, participate in events, and help us
              spread the cuddly chaos across the crypto world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
 

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Twitter className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-800">Twitter</h3>
                  <p className="text-purple-700 mb-4">Follow us for announcements and memes</p>
                  
                  
                  <Link href="https://x.com/koala_on_sol" className="text-purple-200 hover:text-white flex items-center gap-2"> 
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Follow Twitter <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </CardContent>
                

              </Card>
              
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Telegram className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-800">Telegram</h3>
                  <p className="text-purple-700 mb-4">Join us for interacting with community.</p>
                  
                  
                  <Link href="https://t.me/koalauniverse" className="text-purple-200 hover:text-white flex items-center gap-2"> 
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    Join Telegram <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Roadmap</h2>
            <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-purple-700">
              Our journey to koala-fy the crypto space is just beginning. Here's what we have planned:
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-purple-200 hidden md:block"></div>

              <div className="space-y-12 relative">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <div className="bg-purple-100 p-6 rounded-lg relative">
                      <div className="absolute top-1/2 -right-4 h-8 w-8 -translate-y-1/2 rounded-full bg-purple-500 hidden md:block"></div>
                      <h3 className="text-xl font-bold mb-2 text-purple-800">Phase 1: Take over the forest 🐨🌳</h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-2">
                        <li>Token launch on Pump.fun</li>
                        <li>Community building (1,000+ holders)</li>
                        <li>Website launch and social media setup</li>
                        <li>First meme contest with $KOALA prizes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-left md:pl-8">
                    <div className="bg-purple-100 p-6 rounded-lg relative">
                      <div className="absolute top-1/2 -left-4 h-8 w-8 -translate-y-1/2 rounded-full bg-purple-500 hidden md:block"></div>
                      <h3 className="text-xl font-bold mb-2 text-purple-800">Phase 2: Eucalyptus expansion 🌿</h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-2">
                        <li>CoinGecko and CoinMarketCap listings</li>
                        <li>5,000+ holders milestone</li>
                        <li>Partnerships with influencers</li>
                        <li>First CEX listing</li>
                        <li>Koala-themed NFT collection</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <div className="bg-purple-100 p-6 rounded-lg relative">
                      <div className="absolute top-1/2 -right-4 h-8 w-8 -translate-y-1/2 rounded-full bg-purple-500 hidden md:block"></div>
                      <h3 className="text-xl font-bold mb-2 text-purple-800">Phase 3: Global koala domination 🌏</h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-2">
                        <li>10,000+ holders milestone</li>
                        <li>Major CEX listings</li>
                        <li>Koala DAO for community governance</li>
                        <li>Koala merchandise store</li>
                        <li>Charity partnerships for koala conservation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                  <div className="md:w-1/2 md:text-left md:pl-8">
                    <div className="bg-purple-100 p-6 rounded-lg relative">
                      <div className="absolute top-1/2 -left-4 h-8 w-8 -translate-y-1/2 rounded-full bg-purple-500 hidden md:block"></div>
                      <h3 className="text-xl font-bold mb-2 text-purple-800">Phase 4: To the moon... sleepily 🚀💤</h3>
                      <ul className="list-disc list-inside text-purple-700 space-y-2">
                        <li>50,000+ holders milestone</li>
                        <li>Koala DeFi ecosystem</li>
                        <li>Cross-chain expansion</li>
                        <li>Koala mobile app</li>
                        <li>Secret surprises (we're too sleepy to reveal now)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:hidden">
                    <div className="h-8 w-8 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-800">Ready to Join the Koala Family?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-700">
              Don't miss out on the cutest, cuddliest, and most chaotic memecoin of the year!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-lg">
                Buy $KOALA Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button> 
              <a href="/whitepaper.pdf" className="bg-purple-500 flex gap-x-3 px-3 p-2 justify-center items-center text-white rounded-md hover:bg-purple-600 text-lg">
                Read White Paper
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder-logo.jpg"
                  alt="Koala Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
                <span className="text-xl font-bold">Koala Coin</span>
              </div>
              <p className="text-purple-200">The cuddliest memecoin in the crypto forest.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-purple-200 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#tokenomics" className="text-purple-200 hover:text-white">
                    Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="#how-to-buy" className="text-purple-200 hover:text-white">
                    How to Buy
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-purple-200 hover:text-white">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Community</h3>
              <ul className="space-y-2"> 
                <li>
                  <Link href="https://t.me/koalauniverse" className="text-purple-200 hover:text-white flex items-center gap-2">
                    <Telegram className="h-4 w-4" /> Telegram
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/koala_on_sol" className="text-purple-200 hover:text-white flex items-center gap-2">
                    <Twitter className="h-4 w-4" /> Twitter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-purple-200 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-purple-200 hover:text-white">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-700 text-center text-purple-200">
            <p>&copy; {new Date().getFullYear()} Koala Coin. All rights reserved.</p>
            <p className="mt-2 text-sm">
              $KOALA is a meme coin with no intrinsic value or expectation of financial return. There is no formal team
              or roadmap. It's completely useless and for entertainment purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
