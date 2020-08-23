# CHECKOUT

Supermarkets offer price promotions for combined items: special prices for groups of items bought together. This program does the checkout considering the individual prices and the promotional group prices.

This writing presents a programming problem, my assumptions about it, my solution written in JavaScript, and instructions on how to install, test, and run it.
This is a solution written in plain JavaScript to the problem described below.
:

## PROBLEM

This problem is presented here: http://codekata.com/kata/kata09-back-to-the-checkout/

## DESIGN

I used a Domain-Driven Design as a starting point.

### Architecture

The system transforms a flow of information, which can be achieved by composing functions.

#### Infra-structure

The system depends on NODEJS for its execution. JEST supports testing all the components.

#### Main Components

Execution Configuration:

- _main_: a service actioned externally that starts the pipeline connecting it to the streams received from _parseCliArgs_.
- _parseCliArgs_: this service parses the Command Line Interface arguments to establish the external input stream and the output stream, where the information will flow.

## Installation

This system uses NODEJS and one node package manager. YARN is recommended.
As a preparation for the installation of this system:

1. Install nodejs (https://nodejs.org/en/download/)
2. Install yarn (https://classic.yarnpkg.com/en/docs/install/#debian-stable)

```
$ yarn   # Install all dependencies
```

## Testing

```
$ yarn test filetobetested # TDD with Unit Tests
$ yarn test                # TDD with all Unit Tests
$ yarn test:coverage       # TDD with all Unit Tests
```

## Running

```
$ yarn app                        # run, reading input from stdin and writing on stdout
$ yarn app -i inputFile -o output # run, reading input from stdin and writing on stdout
```
