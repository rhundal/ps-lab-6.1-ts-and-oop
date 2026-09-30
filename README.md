# Reflection - Critical Thinking

## After completing the lab, consider the following questions:

### How does TypeScript enforce type safety in this object-oriented program?

- By checking data type of a variable against the value assigned to it at compile time and giving compile time errors where relevant

### How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

- I didnt have to declare properties of base class Product again in the subclasses PhysicalProduct and DigitalProduct as they both inherit from class Product. In addition, I was able to override the method getPriceWithTax() for both the classes specific to their usecases.

### What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

- Public - makes a class member accessible from anywhere in the application
- Private - makes a class memeber accessible only within the class giving it more protection and modifiable only though setter functions
- Protected - makes a class member accessible from within the class and subclasses only.

### If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

-
