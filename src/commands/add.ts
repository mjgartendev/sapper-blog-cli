import {Command, flags} from '@oclif/command'
import {existsSync, writeFileSync} from 'fs'

export default class Add extends Command {
  static description = 'add new md file in current directory'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'name',
    description: 'note name to add, .md can be omitted',
    required: true,
  }]

  async run() {
    const {args} = this.parse(Add)
    const fileExtension = '.md'
    const fileName = `${args.name}${args.name.slice(-3) === fileExtension ? '' : fileExtension}`
    const noteName = fileName.slice(0, -3)

    if (existsSync(fileName)) {
      this.log(`Note "${noteName}" already exists, use "edit" or "delete" instead`)
    } else {
      writeFileSync(fileName, `# ${args.name}`)
      this.log(`Created "${noteName}" note`)
    }
  }
}
