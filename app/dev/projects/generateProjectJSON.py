import json

input_file = "projectCardsRaw.json"
output_file = "projectCards.json"
default_year = "2024-2025"

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

# If the top-level keys appear to be project slugs instead of a year, wrap them.
# We check by verifying if every value is a dict with keys "name" and "description"
if all(isinstance(value, dict) and "name" in value and "description" in value for value in data.values()):
    data = {default_year: data}

transformed_data = {}

for year, projects in data.items():
    transformed_data[year] = {}
    for key, project in projects.items():
        if isinstance(project, dict):
            display_name = project.get("name", "")
            description = project.get("description", "")
        else:
            print(f"Warning: Expected a dict for project '{key}', got {type(project)}. Using its string value as the name.")
            display_name = project
            description = ""
        transformed_data[year][key] = {
            "name": display_name,
            "img": {
                "src": f"/projects/{year}/{key}/{key}.png",
                "alt": f"{display_name} Logo"
            },
            "description": description,
            "href": f"/dev/projects/{key}"
        }

with open(output_file, "w", encoding="utf-8") as f:
    json.dump(transformed_data, f, indent=2)

print("Transformation complete. New JSON saved to:", output_file)