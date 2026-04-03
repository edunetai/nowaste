# Contributing to Nothing Goes to Waste

Thank you for your interest in contributing to this project!

## Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and type checking:
   ```bash
   npm run lint
   npm test
   npm run build
   ```
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Code Style

- Use TypeScript with strict mode enabled
- Follow existing component patterns in `src/components/`
- Use meaningful variable and function names
- Add props JSDoc comments for component interfaces
- Test new components with Vitest

## TypeScript Guidelines

- Enable `strict: true` in tsconfig.json
- Avoid `any` type - use proper typing
- Use `interface` for object shapes, `type` for unions/aliases

## Testing Guidelines

- Write tests for new components using Vitest
- Use React Testing Library for component tests
- Test internationalization-aware text using the LanguageProvider
- Include both positive and negative test cases

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove)
- Reference issue numbers when applicable

## Questions?

If you have questions, please open an issue for discussion before submitting a PR.
