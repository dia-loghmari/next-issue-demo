import { componentMap } from "@/app/componentMap";

export default function resolveComponent(name: string) {
  return componentMap[name] || null;
}
