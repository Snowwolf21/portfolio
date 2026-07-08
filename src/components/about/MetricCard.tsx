import GlassCard from "../ui/GlassCard";

interface Props {

    value:string;

    label:string;

}

export default function MetricCard({value,label}:Props){
return(

<GlassCard className="group p-4 text-center transition-all duration-300 hover:-translate-y-2">

<h3 className="text-3xl font-black text-accent-hover">{value} </h3>

<p className="mt-3 text-foreground tracking-wider">{label}</p>

</GlassCard>

)}