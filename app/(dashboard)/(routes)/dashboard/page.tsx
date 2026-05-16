import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard! Here you can manage your AI tools and services.</p>
            <UserButton /> {/* This will show the user's profile picture and a dropdown for account management */}
        </div>
    );
}